import { Module } from '@nestjs/common';
import { FactorialController } from './factorial.controller';
import { FactorialService } from './factorial.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
  ],
  controllers: [FactorialController],
  providers: [FactorialService],
})
export class FibonacciModule {}
