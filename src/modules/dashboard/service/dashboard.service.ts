import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { DashboardEntity } from 'src/schema/dashborad.schema';
import { CreateUserDto } from '../usecase/cerate';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(DashboardEntity.name)
    private readonly dashBoardModel: mongoose.Model<DashboardEntity>,
  ) {}

  async create(createUser: CreateUserDto): Promise<DashboardEntity> {
    const created = new this.dashBoardModel(createUser);
    return created.save();
  }

  async findAll(): Promise<DashboardEntity[]> {
    return this.dashBoardModel.find().exec();
  }
}
