/* eslint-disable @typescript-eslint/no-explicit-any */
import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from '../tasks.service';

describe('TasksService', () => {
  let tasksService: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
      ],
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(tasksService).toBeDefined();
  });
});
