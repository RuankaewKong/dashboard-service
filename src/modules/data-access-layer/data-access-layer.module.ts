import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardEntity, DashboardSchema } from './dashboard/dashboard.entity';
import { DashboardRepository } from './dashboard/dashboard.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DashboardEntity.name, schema: DashboardSchema },
    ]),
  ],
  providers: [DashboardRepository],
  exports: [DashboardRepository],
})
export class DataAccessLayerModule {}
