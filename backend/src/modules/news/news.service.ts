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

  /**
   * Fetches top stories from the New York Times API based on the provided section.
   * @param section - The section for which to fetch top stories.
   * @returns A promise that resolves to an array of NewsItem objects.
   * @throws An error if the request to the API fails.
   */
  async getTopStories({ section }: GetTopStoriesDTO): Promise<NewsItem[]> {
    const nyTimesAPIKey = this.configService.get<string>('nyTimesAPIKey');
    const url = `${NY_TIMES_TOP_STORIES_API_URL}/${section}.json?api-key=${nyTimesAPIKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const { results } = await response.json();
    const filtered = this.filter(results);
    return this.transform(filtered);
  }

  /**
   * Filters out invalid ToppStoriesResult objects.
   * @param results - An array of ToppStoriesResult objects.
   * @returns An array of valid ToppStoriesResult objects.
   */
  private filter(results: ToppStoriesResult[]): ToppStoriesResult[] {
    return results.filter(
      (result: ToppStoriesResult) =>
        result.title &&
        result.section &&
        result.abstract &&
        result.byline &&
        result.url,
    );
  }

  /**
   * Transforms valid ToppStoriesResult objects into NewsItem objects.
   * @param results - An array of valid ToppStoriesResult objects.
   * @returns An array of NewsItem objects.
   */
  private transform(filteredResults: ToppStoriesResult[]): NewsItem[] {
    return filteredResults.map((result: ToppStoriesResult) => {
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

  /**
   * Gets the image URL from the provided multimedia items.
   * @param multimedia - An array of MultimediaItem objects.
   * @returns The URL of the image, or an empty string if not found.
   */
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
