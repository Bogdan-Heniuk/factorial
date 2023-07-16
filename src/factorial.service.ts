import { Injectable } from '@nestjs/common';

@Injectable()
export class FactorialService {
  calcFactorial(num: number): number {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
      return num * this.calcFactorial(num - 1);
    }
  }
}
