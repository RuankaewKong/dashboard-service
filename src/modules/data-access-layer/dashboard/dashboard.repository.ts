import { Injectable, Logger } from '@nestjs/common';
import { DashboardEntity } from './dashboard.entity';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DashboardDL } from './dashboard.dl';
import { FindOneOptions } from 'typeorm';

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

  async findOne(condition: FindOneOptions): Promise<any | null> {
    const data = await this.dashboardRepository.findOne(condition);
    return this.toDataLayer(data);
  }

  toDataLayer(entity: DashboardEntity): DashboardDL {
    return {
      action: entity.action,
      metaData: entity.metaData,
    };
  }
}
