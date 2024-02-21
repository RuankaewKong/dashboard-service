import { Injectable, Logger } from '@nestjs/common';
import { DashboardEntity } from './dashboard.entity';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DashboardDL } from './dashboard.dl';

@Injectable()
export class DashboardRepository {
  private logger: Logger = new Logger(DashboardRepository.name);
  constructor(
    @InjectModel(DashboardEntity.name)
    private readonly dashboardRepository: mongoose.Model<DashboardEntity>,
  ) {}

  async create(createDashboard: DashboardDL): Promise<DashboardDL> {
    const created = await this.dashboardRepository.create({
      ...createDashboard,
    });
    await created.save();
    return this.toDataLayer(created);
  }

  async getDashboard(): Promise<DashboardDL[]> {
    const dashboard = await this.dashboardRepository.find();
    return dashboard.map(this.toDataLayer);
  }
  toDataLayer(entity: DashboardEntity): DashboardDL {
    return {
      key: entity.key,
      metaData: {
        campaignName: entity.metaData?.campaignName,
        price: entity.metaData?.price,
        phone: entity.metaData?.phone,
        paymentChanel: entity.metaData?.paymentChanel,
      },
    };
  }
}
