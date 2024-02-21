import { Injectable, Logger } from '@nestjs/common';
import { DashboardService } from '../service/dashboard.service';

@Injectable()
export class DashboardUsecase {
  private readonly logger: Logger = new Logger(DashboardUsecase.name);
  constructor(private dashboardService: DashboardService) {}
}
