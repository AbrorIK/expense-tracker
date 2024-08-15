import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty()
  amount: number;

  @ApiProperty()
  type: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  userId: number;
}
