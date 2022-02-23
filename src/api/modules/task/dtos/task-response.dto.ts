import { ApiProperty } from '@nestjs/swagger';

export class TaskResponseDto {
  @ApiProperty({ description: 'Description of task' })
  description: string;

  constructor(description: string) {
    this.description = description;
  }
}
