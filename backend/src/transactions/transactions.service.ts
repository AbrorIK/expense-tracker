import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: createTransactionDto,
    });
  }

  findAll() {
    return this.prisma.transaction.findMany();
  }

  findAllByUser(userId: number) {
    return this.prisma.transaction.findMany({
      where: { userId },
    });
  }

  findOne(id: number) {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return this.prisma.transaction.update({
      where: { id },
      data: updateTransactionDto,
    });
  }

  remove(id: number) {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
