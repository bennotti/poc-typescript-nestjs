import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExceptionResponseApiDto } from '../../../api/dtos/exception-response-api.dto';
import { ApiDataResponseApiResponse } from '../../../api/decorators/data-response-api.decorator';
import { ApiListDataResponseApiResponse } from '../../../api/decorators/list-data-response-api.decorator';
import { DataResponseApiDto } from '../../../api/dtos/data-response-api.dto';
import { CreateTaskRequestDto } from './dtos/create-task-request.dto';
import { TaskResponseDto } from './dtos/task-response.dto';
import { UpdateTaskRequestDto } from './dtos/update-task-request.dto';
import { TasksService } from './tasks.service';

@Controller('api/tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiListDataResponseApiResponse(TaskResponseDto)
  @ApiResponse({ status: 400, type: ExceptionResponseApiDto })
  async getAll(): Promise<DataResponseApiDto<TaskResponseDto[]>> {
    return this.tasksService.findAll();
  }

  @Get('/:taskId')
  @ApiOperation({ summary: 'Get task by id' })
  @ApiDataResponseApiResponse(TaskResponseDto)
  @ApiResponse({ status: 400, type: ExceptionResponseApiDto })
  async getById(@Param('taskId') taskId: number): Promise<DataResponseApiDto<TaskResponseDto>> {
    return this.tasksService.findOne(taskId);
  }

  @Post()
  @ApiOperation({ summary: 'Create task' })
  @ApiDataResponseApiResponse(TaskResponseDto)
  @ApiResponse({ status: 400, type: ExceptionResponseApiDto })
  @ApiBody({ type: CreateTaskRequestDto })
  async createBadge(@Body() bodyRequest: CreateTaskRequestDto): Promise<DataResponseApiDto<TaskResponseDto>> {
    return this.tasksService.create(bodyRequest);
  }

  @Put('/:taskId')
  @ApiOperation({ summary: 'Update task' })
  @ApiDataResponseApiResponse(TaskResponseDto)
  @ApiResponse({ status: 400, type: ExceptionResponseApiDto })
  @ApiBody({ type: UpdateTaskRequestDto })
  async updateBadge(
    @Param('taskId') taskId: number,
    @Body() bodyRequest: UpdateTaskRequestDto,
  ): Promise<DataResponseApiDto<TaskResponseDto>> {
    return this.tasksService.update(taskId, bodyRequest);
  }
}
