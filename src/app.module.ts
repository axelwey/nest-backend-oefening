import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeriesModule } from './series/series.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/streaming'),
    SeriesModule,
  ],
})
export class AppModule {}
