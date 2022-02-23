import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class UpdateTaskRequestDto {
  @IsDefined()
  @IsString()
  @ApiProperty({ description: 'Descriptioin of task', example: '' })
  description: string;
}
