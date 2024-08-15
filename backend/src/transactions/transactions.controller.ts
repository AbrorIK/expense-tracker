import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TransactionEntity } from './entities/transaction.entity';

@Controller('transactions')
@ApiTags('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @ApiCreatedResponse({ type: TransactionEntity })
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  @ApiOkResponse({ type: TransactionEntity, isArray: true })
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get('user/:userId')
  @ApiOkResponse({ type: TransactionEntity, isArray: true })
  findAllByUser(@Param('userId') userId: string) {
    return this.transactionsService.findAllByUser(+userId);
  }

  @Get(':id')
  @ApiOkResponse({ type: TransactionEntity })
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TransactionEntity })
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TransactionEntity })
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}
