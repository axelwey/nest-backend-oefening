import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SeriesDocument=HydratedDocument<Series>

@Schema()
export class Series {
  @Prop() title : string;  
  @Prop() platform : string;
  @Prop([String]) genres : string[];
  @Prop() seasons : number;
  @Prop() rating : number;
}

export const SeriesSchema = SchemaFactory.createForClass(Series);
