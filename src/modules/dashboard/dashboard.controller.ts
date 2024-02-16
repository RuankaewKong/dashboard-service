import { Body, Controller, Get, Post, Version } from '@nestjs/common';
import { DashboardService } from './service/dashboard.service';
import { DashboardEntity } from 'src/schema/dashborad.schema';
import { CreateUserDto } from './usecase/cerate';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashBoardService: DashboardService) {}

  @Version('1')
  @Get('/getUser')
  async getUser(): Promise<DashboardEntity[]> {
    return this.dashBoardService.findAll();
  }

  @Version('1')
  @Post('/create-user')
  async createUser(@Body() createDto: CreateUserDto): Promise<DashboardEntity> {
    return this.dashBoardService.create(createDto);
  }
}
