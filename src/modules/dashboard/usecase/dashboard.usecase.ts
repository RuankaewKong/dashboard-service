import { Injectable, Logger } from '@nestjs/common';
import { DashboardService } from '../service/dashboard.service';
import { DashboardDL } from 'src/modules/data-access-layer/dashboard/dashboard.dl';

@Injectable()
export class DashboardUsecase {
  private readonly logger: Logger = new Logger(DashboardUsecase.name);
  constructor(private dashboardService: DashboardService) {}

  async findMetaData(): Promise<DashboardDL[]> {
    const data = await this.dashboardService.getAllDashboard();
    return data;
  }

  async findOne(action: string): Promise<any> {
    const data = await this.dashboardService.getDashboard(action);
    return data;
  }
}
