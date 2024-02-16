import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardSchema, DashboardEntity } from 'src/schema/dashborad.schema';
import { DashboardService } from './service/dashboard.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DashboardEntity.name, schema: DashboardSchema },
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
