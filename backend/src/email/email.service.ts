import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

export type ContactEmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type SendResult = { sent: boolean; error?: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly resend: Resend | null;
  private readonly to: string;
  private readonly from: string;

  constructor(private readonly config: ConfigService) {
    const apiKey = this.config.get<string>('RESEND_API_KEY');
    this.to = this.config.get<string>('CONTACT_TO_EMAIL') ?? 'jourdan@a5partners.com';
    this.from =
      this.config.get<string>('CONTACT_FROM_EMAIL') ??
      'A5 Partners <onboarding@resend.dev>';

    this.resend = apiKey ? new Resend(apiKey) : null;

    if (!this.resend) {
      this.logger.warn(
        'RESEND_API_KEY is not set — contact emails will be logged to the console instead of sent.',
      );
    }
  }

  async sendContactNotification(payload: ContactEmailPayload): Promise<SendResult> {
    if (!this.resend) {
      this.logger.log(
        `[email not sent — no API key]\n  To: ${this.to}\n  From: ${payload.name} <${payload.email}>\n  Subject: ${payload.subject}\n  Message: ${payload.message}`,
      );
      return { sent: false, error: 'RESEND_API_KEY not configured' };
    }

    try {
      const { error } = await this.resend.emails.send({
        from: this.from,
        to: this.to,
        replyTo: payload.email,
        subject: `[a5partners.com] ${payload.subject}`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Subject: ${payload.subject}`,
          '',
          payload.message,
        ].join('\n'),
        html: `
          <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;line-height:1.6;color:#111">
            <h2 style="margin:0 0 16px">New contact form submission</h2>
            <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
            <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
            <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
            <div style="padding:16px;background:#f5f6f8;border-left:3px solid #1f5fe0;white-space:pre-wrap">${escapeHtml(payload.message)}</div>
          </div>
        `,
      });

      if (error) {
        this.logger.error(`Resend rejected the message: ${error.message}`);
        return { sent: false, error: error.message };
      }

      this.logger.log(`Contact notification sent to ${this.to}`);
      return { sent: true };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown email error';
      this.logger.error(`Failed to send contact notification: ${message}`);
      return { sent: false, error: message };
    }
  }
}
