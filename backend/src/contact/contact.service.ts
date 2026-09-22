import { Injectable, Logger } from '@nestjs/common';
import { EmailService } from '../email/email.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateContactDto } from './dto/create-contact.dto.js';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly email: EmailService,
  ) {}

  async submit(dto: CreateContactDto, ipAddress?: string) {
    // Honeypot: silently accept so bots get no signal, but store nothing.
    if (dto.website && dto.website.trim().length > 0) {
      this.logger.warn(`Honeypot triggered from ${ipAddress ?? 'unknown IP'}`);
      return { success: true };
    }

    const submission = await this.prisma.contactSubmission.create({
      data: {
        name: dto.name,
        email: dto.email,
        subject: dto.subject,
        message: dto.message,
        ipAddress: ipAddress ?? null,
      },
    });

    // The submission is already durable, so a delivery failure must not fail
    // the request — the visitor still gets their confirmation.
    const result = await this.email.sendContactNotification({
      name: dto.name,
      email: dto.email,
      subject: dto.subject,
      message: dto.message,
    });

    await this.prisma.contactSubmission.update({
      where: { id: submission.id },
      data: { emailSent: result.sent, emailError: result.error ?? null },
    });

    return { success: true, id: submission.id };
  }
}
