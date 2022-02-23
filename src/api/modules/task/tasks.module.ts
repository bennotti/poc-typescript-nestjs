import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
    imports: [],
    providers: [TasksService],
    controllers: [TasksController],
})
export class TasksModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    // consumer.apply(ValidateMiddleware).forRoutes(TasksController);
  }
}
