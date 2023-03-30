import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  postMessages() {}

  @Get('/:id')
  getMessage() {}
}
