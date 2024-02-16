import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DASHBOARD_DB_CONST } from 'src/configs/dashboard.config';

export type DashboradDocument = HydratedDocument<DashboardEntity>;

@Schema({ collection: DASHBOARD_DB_CONST.COLLECTION.DASHBOARD })
export class DashboardEntity {
  @Prop({ type: String, required: true, unique: true, index: true })
  key: string;

  @Prop()
  user: string;
}

export const DashboardSchema = SchemaFactory.createForClass(DashboardEntity);
