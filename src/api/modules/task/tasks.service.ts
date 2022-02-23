import { Injectable } from '@nestjs/common';
import { DataResponseApiDto } from '../../../api/dtos/data-response-api.dto';
import { CreateTaskRequestDto } from './dtos/create-task-request.dto';
import { TaskResponseDto } from './dtos/task-response.dto';
import { UpdateTaskRequestDto } from './dtos/update-task-request.dto';

@Injectable()
export class TasksService {
  async create(bodyRequest: CreateTaskRequestDto): Promise<DataResponseApiDto<TaskResponseDto>> {
    return new DataResponseApiDto<TaskResponseDto>(new TaskResponseDto(bodyRequest.description));
  }

  async findOne(id: number): Promise<DataResponseApiDto<TaskResponseDto>> {
    return new DataResponseApiDto<TaskResponseDto>(new TaskResponseDto(`description of task ${id}`));
  }

  async findAll(): Promise<DataResponseApiDto<TaskResponseDto[]>> {
    return new DataResponseApiDto<TaskResponseDto[]>([new TaskResponseDto('description of task')]);
  }

  async update(id: number, bodyRequest: UpdateTaskRequestDto): Promise<DataResponseApiDto<TaskResponseDto>> {
    return new DataResponseApiDto<TaskResponseDto>(new TaskResponseDto(bodyRequest.description));
  }
}
