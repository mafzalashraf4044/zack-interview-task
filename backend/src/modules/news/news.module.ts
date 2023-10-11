import { Module } from '@nestjs/common';

import NewsController from './news.controller';
import NewsService from './news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
})
export default class NewsModule {}
