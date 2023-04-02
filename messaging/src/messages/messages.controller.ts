import { Controller, Body, Param, NotFoundException } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  postMessages(@Body() body: CreateMessageDTO) {
    console.log(body);
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    console.log(id);
    const message = await this.messageService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found!!');
    }

    return message;
  }
}
