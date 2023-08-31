import { Controller } from '@nestjs/common';
import { FactorialService } from './factorial.service';
import {
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class FactorialController {
  constructor(private readonly fibonacciService: FactorialService) {}

  @MessagePattern({ cmd: 'calc_factorial' })
  async calcFactorial(@Payload() index: string): Promise<number> {
    const result = await this.fibonacciService.calcFactorial(Number(index));
    return result;
  }
}
