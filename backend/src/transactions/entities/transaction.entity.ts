import { ApiProperty } from '@nestjs/swagger';
import { Transaction } from '@prisma/client';

export class TransactionEntity implements Transaction {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  type: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  userId: number;
}
