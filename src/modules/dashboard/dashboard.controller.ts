import { Body, Controller, Get, Post, Version } from '@nestjs/common';
import { DashboardService } from './service/dashboard.service';
import { OrderDto, OrderResponse } from './usecase/post-order';
import { DashboardDL } from '../data-access-layer/dashboard/dashboard.dl';
import { DashboardUsecase } from './usecase/dashboard.usecase';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private dashBoardService: DashboardService,
    private dashboardUsecase: DashboardUsecase,
  ) {}

  @Version('1')
  @Get('/getMetaData')
  async getData(): Promise<DashboardDL[]> {
    const dataPromise = this.dashboardUsecase.findMetaData();
    try {
      const data = await dataPromise;
      return data;
    } catch (error) {
      console.error('Error occurred:', error);
      throw error;
    }
  }

  @Version('1')
  @Post('/add-meta')
  async createUser(@Body() orderRequest: OrderDto): Promise<OrderResponse> {
    console.log('success');
    return this.dashBoardService.sendOrder(orderRequest);
  }
}
