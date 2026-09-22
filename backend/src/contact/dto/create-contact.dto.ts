import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

const trim = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() : value;

/** Mirrors the four fields on the original Squarespace contact form. */
export class CreateContactDto {
  @Transform(trim)
  @IsString()
  @IsNotEmpty({ message: 'Name is required.' })
  @MaxLength(120, { message: 'Name is too long.' })
  name!: string;

  @Transform(trim)
  @IsEmail({}, { message: 'Enter a valid email address.' })
  @MaxLength(200, { message: 'Email is too long.' })
  email!: string;

  @Transform(trim)
  @IsString()
  @IsNotEmpty({ message: 'Subject is required.' })
  @MaxLength(200, { message: 'Subject is too long.' })
  subject!: string;

  @Transform(trim)
  @IsString()
  @IsNotEmpty({ message: 'Message is required.' })
  @MaxLength(5000, { message: 'Message is too long.' })
  message!: string;

  /**
   * Honeypot. Hidden from real users by CSS, so a non-empty value means a bot.
   * Declared here so `forbidNonWhitelisted` does not reject the field outright.
   */
  @IsOptional()
  @IsString()
  website?: string;
}
