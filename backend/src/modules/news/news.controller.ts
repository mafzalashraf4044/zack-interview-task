import {
  Controller,
  Get,
  Query
} from '@nestjs/common';

import NewsService from './news.service';

@Controller('news')
export default class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('top-stories')
  getTopStories(): Promise<boolean> {
    return this.newsService.getTopStories();
  }
}
