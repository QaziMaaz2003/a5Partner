import { Body, Controller, Get, HttpCode, Ip, Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ContactService } from './contact.service.js';
import { CreateContactDto } from './dto/create-contact.dto.js';

@Controller('api')
export class ContactController {
  constructor(private readonly contact: ContactService) {}

  @Get('health')
  health() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  /**
   * 5 submissions per 10 minutes per IP, replacing the old form's captcha.
   * The key must match a throttler configured in ThrottlerModule ('default'),
   * otherwise the override is silently ignored.
   */
  @Throttle({ default: { limit: 5, ttl: 600_000 } })
  @Post('contact')
  @HttpCode(200)
  submit(@Body() dto: CreateContactDto, @Ip() ip: string) {
    return this.contact.submit(dto, ip);
  }
}
