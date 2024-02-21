import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './service/dashboard.service';
import { DataAccessLayerModule } from '../data-access-layer/data-access-layer.module';
import { ConfigModule } from '@nestjs/config';
import { DashboardUsecase } from './usecase/post-order.usecase';

@Module({
  imports: [ConfigModule, DataAccessLayerModule],
  controllers: [DashboardController],
  providers: [DashboardService, DashboardUsecase],
})
export class DashboardModule {}
