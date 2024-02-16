import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardSchema, DashboradEntity } from 'src/schema/dashborad.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DashboradEntity.name, schema: DashboardSchema },
    ]),
  ],
  controllers: [DashboardController],
  providers: [],
})
export class DashboardModule {}
