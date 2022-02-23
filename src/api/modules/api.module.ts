import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    TasksModule,
  ],
})
export class ApiModule {}
