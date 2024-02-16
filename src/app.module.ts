import { Module } from '@nestjs/common';
import { DashboardService } from './modules/dashboard/service/dashboard.service';
import { DashboardController } from './modules/dashboard/dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI_FULL || '', {
      dbName: 'dashboard',
    }),
    DashboardModule,
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class AppModule {}
