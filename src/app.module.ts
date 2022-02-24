import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/modules/api.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronScheduleTaskModule } from './cron-schedule-tasks/modules/cron-schedule-task.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    CronScheduleTaskModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
