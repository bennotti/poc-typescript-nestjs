import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/modules/api.module';

@Module({
  imports: [
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
