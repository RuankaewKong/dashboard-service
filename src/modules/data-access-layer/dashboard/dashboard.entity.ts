import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DASHBOARD_DB_CONST } from 'src/configs/dashboard.config';
import { MetaData } from 'src/types/campaign.type';

export type DashboradDocument = HydratedDocument<DashboardEntity>;

@Schema({ collection: DASHBOARD_DB_CONST.COLLECTION.DASHBOARD })
export class DashboardEntity {
  @Prop({ type: String, required: true })
  key: string;

  @Prop({ type: Object, required: true })
  metaData: MetaData;
}

export const DashboardSchema = SchemaFactory.createForClass(DashboardEntity);
