
import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';

async function bootstrap() {
  const rawPort = process.env.PORT;

  if (
    !rawPort ||
    !/^\d+$/.test(rawPort) ||
    Number(rawPort) < 1 ||
    Number(rawPort) > 65535
  ) {
    throw new Error(
      'Invalid PORT: set an integer between 1 and 65535 in api/.env',
    );
  }

  const port = Number(rawPort);

  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}

bootstrap();
