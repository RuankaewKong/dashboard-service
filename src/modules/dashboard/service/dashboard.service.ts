import { Injectable, Logger } from '@nestjs/common';
import { DashboardRepository } from 'src/modules/data-access-layer/dashboard/dashboard.repository';
import { OrderRequset, OrderResponse } from '../usecase/post-order';
import { DashboardDL } from 'src/modules/data-access-layer/dashboard/dashboard.dl';
import * as _ from 'lodash';
import { DataResponse } from '../usecase/get-data';

@Injectable()
export class DashboardService {
  private logger: Logger = new Logger(DashboardService.name);

  constructor(private readonly dashBoardRepository: DashboardRepository) {}

  async getAllDashboard(): Promise<DashboardDL[]> {
    const result = await this.dashBoardRepository.getDashboard();
    this.calulateKey();
    return result;
  }

  async getDashboard(action: string): Promise<any> {
    const data = await this.dashBoardRepository.findOne({ where: { action } });
    return data;
  }

  async sendOrder(req: OrderRequset): Promise<OrderResponse> {
    const created = await this.dashBoardRepository.create(req);
    // this.calulateKey();
    return { status: 'success', action: created.action };
  }

  async calulateKey(): Promise<DataResponse[]> {
    const data = await this.dashBoardRepository.getDashboard();
    const groupedData = _.groupBy(data, 'action');

    const results: DataResponse[] = [];

    for (const action in groupedData) {
      const actionData = groupedData[action];

      if (action === 'PAYMENT') {
        const groupedByMetaData = _.groupBy(
          actionData.flatMap((item) => item.metaData),
          'paymentChanel',
        );

        const countsObject = _.mapValues(
          groupedByMetaData,
          (items) => items.length,
        );
        const keys = Object.keys(countsObject);
        const counts = Object.values(countsObject);

        results[action] = { keys, counts };

        this.logger.debug(action, { keys, counts });
      }
      if (action === 'CAMPAING') {
        const groupedByCampaign = _.groupBy(
          actionData.flatMap((item) => item.metaData),
          'campaignName',
        );

        const countsObject = _.mapValues(
          groupedByCampaign,
          (items) => items.length,
        );
        const keys = Object.keys(countsObject);
        const counts = Object.values(countsObject); // Convert object values to an array

        results[action] = { keys, counts };

        this.logger.debug(action, { keys, counts });
      }
    }

    return results;
  }
}
