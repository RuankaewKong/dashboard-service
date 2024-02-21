import { Injectable, Logger } from '@nestjs/common';
import { DashboardRepository } from 'src/modules/data-access-layer/dashboard/dashboard.repository';
import { OrderRequset, OrderResponse } from '../usecase/post-order';
import { DashboardDL } from 'src/modules/data-access-layer/dashboard/dashboard.dl';
import * as _ from 'lodash';

@Injectable()
export class DashboardService {
  private logger: Logger = new Logger(DashboardService.name);

  constructor(private readonly dashBoardRepository: DashboardRepository) {}

  async getAllDashboard(): Promise<DashboardDL[]> {
    const result = await this.dashBoardRepository.getDashboard();
    return result;
  }

  async sendOrder(req: OrderRequset): Promise<OrderResponse> {
    const created = await this.dashBoardRepository.create(req);
    this.calulateKey();
    return { status: 'success', campaign: created.key };
  }

  async calulateKey(): Promise<any> {
    const data = await this.dashBoardRepository.getDashboard();
    const groupedData = _.groupBy(data, 'key');
    const groupCount = _.mapValues(groupedData, (g) => g.length);

    const keys = Object.keys(groupCount);
    const counts = Object.values(groupCount);

    // this.logger.debug({ keys, counts });
    return { keys, counts };
  }
}
