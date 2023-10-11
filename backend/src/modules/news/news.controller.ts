import {
  Controller,
  Get,
  Query
} from '@nestjs/common';

import NewsService from './news.service';
import { GetTopStoriesDTO } from './dto';
import { NewsItem } from './interfaces';

@Controller('news')
export default class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('top-stories')
  getTopStories(@Query() query: GetTopStoriesDTO): Promise<NewsItem[]> {
    return this.newsService.getTopStories(query);
  }
}
