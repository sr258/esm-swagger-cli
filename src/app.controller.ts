import { Controller, Get, Param } from '@nestjs/common';
import { TestDTO } from './test.dto.js';

@Controller()
export class AppController {
  constructor() {}

  @Get(':message')
  async getMessage(@Param('message') message: string): Promise<TestDTO> {
    return new TestDTO(message);
  }
}
