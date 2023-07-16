import { NestFactory } from '@nestjs/core';
import { FibonacciModule } from './factorial.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(FibonacciModule);

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://rabbitmq'],
      queue: 'factorial_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.startAllMicroservices()
}
bootstrap();
