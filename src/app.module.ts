import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseConfigService } from './configs/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: MongooseConfigService,
    }),
    DashboardModule,
  ],
})
export class AppModule {}
