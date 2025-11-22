import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { Series, SeriesDocument } from './series.schema/series.schema';


@Injectable()
export class SeriesService {

  constructor(
    @InjectModel(Series.name) private model:Model<SeriesDocument>,
  ){}
  create(createSeriesDto: CreateSeriesDto) {
    const created = new this.model(createSeriesDto);
    return created.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateSeriesDto: UpdateSeriesDto) {
    return this.model.findByIdAndUpdate(id,updateSeriesDto,{new:true}).exec();
  }

  remove(id: number) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
