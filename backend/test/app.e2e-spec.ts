import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module.js';

describe('Contact API (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // Match main.ts so validation behaves the same as in production.
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('GET /api/health reports ok', () => {
    return request(app.getHttpServer())
      .get('/api/health')
      .expect(200)
      .expect((res) => {
        expect(res.body.status).toBe('ok');
      });
  });

  it('POST /api/contact rejects missing fields', () => {
    return request(app.getHttpServer())
      .post('/api/contact')
      .send({ name: '', email: '', subject: '', message: '' })
      .expect(400);
  });

  it('POST /api/contact rejects a malformed email', () => {
    return request(app.getHttpServer())
      .post('/api/contact')
      .send({
        name: 'Test',
        email: 'not-an-email',
        subject: 'Hello',
        message: 'Body',
      })
      .expect(400);
  });

  it('POST /api/contact rejects unknown fields', () => {
    return request(app.getHttpServer())
      .post('/api/contact')
      .send({
        name: 'Test',
        email: 'test@example.com',
        subject: 'Hello',
        message: 'Body',
        isAdmin: true,
      })
      .expect(400);
  });

  it('POST /api/contact swallows honeypot submissions without persisting', () => {
    return request(app.getHttpServer())
      .post('/api/contact')
      .send({
        name: 'Bot',
        email: 'bot@example.com',
        subject: 'spam',
        message: 'spam',
        website: 'http://spam.example',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.success).toBe(true);
        // A stored submission would carry an id; the honeypot path returns none.
        expect(res.body.id).toBeUndefined();
      });
  });
});
