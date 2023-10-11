import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
  NY_TIMES_TOP_STORIES_API_URL,
  NY_TIMES_TOP_STORY_IMAGE_FORMAT,
} from '@common/constants';

import { GetTopStoriesDTO } from './dto';
import { NewsItem, ToppStoriesResult, MultimediaItem } from './interfaces';

@Injectable()
export default class UserService {
  constructor(private configService: ConfigService) {}

  async getTopStories({ section }: GetTopStoriesDTO): Promise<NewsItem[]> {
    const nyTimesAPIKey = this.configService.get<string>('nyTimesAPIKey');
    const url = `${NY_TIMES_TOP_STORIES_API_URL}/${section}.json?api-key=${nyTimesAPIKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const { results } = await response.json();

    return this.transform(results);
  }

  private transform(results: ToppStoriesResult[]): NewsItem[] {
    // filtering invalid results
    const filtered = results.filter(
      (result: ToppStoriesResult) =>
        result.title &&
        result.section &&
        result.abstract &&
        result.byline &&
        result.url,
    );

    return filtered.map((result: ToppStoriesResult) => {
      const newsItem: NewsItem = {
        title: result.title,
        section: result.section,
        subSection: result.subsection,
        abstract: result.abstract,
        author: result.byline,
        image: this.getImageUrl(result.multimedia),
        url: result.url,
        publishedAt: result.published_date,
      };

      return newsItem;
    });
  }

  private getImageUrl(multimedia: MultimediaItem[]): string {
    if (!multimedia) {
      return '';
    }

    const image = multimedia.find(
      item => item.format === NY_TIMES_TOP_STORY_IMAGE_FORMAT,
    );
    return image ? image.url : '';
  }
}
