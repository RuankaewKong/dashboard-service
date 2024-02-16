import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DASHBOARD_DB_CONST } from 'src/configs/database.comfig';

export type DashboradDocument = HydratedDocument<DashboradEntity>;

@Schema({ collection: DASHBOARD_DB_CONST.COLLECTION.DASHBOARD })
export class DashboradEntity {
  @Prop()
  key: string;

  @Prop([String])
  metaData: string[];
}

export const DashboardSchema = SchemaFactory.createForClass(DashboradEntity);
