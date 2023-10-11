import { IsEnum } from 'class-validator';

export enum NewsSection {
  Arts = 'arts',
  Automobiles = 'automobiles',
  BooksReview = 'books/review',
  Business = 'business',
  Fashion = 'fashion',
  Food = 'food',
  Health = 'health',
  Home = 'home',
  Insider = 'insider',
  Magazine = 'magazine',
  Movies = 'movies',
  NYRegion = 'nyregion',
  Obituaries = 'obituaries',
  Opinion = 'opinion',
  Politics = 'politics',
  RealEstate = 'realestate',
  Science = 'science',
  Sports = 'sports',
  SundayReview = 'sundayreview',
  Technology = 'technology',
  Theater = 'theater',
  TMagazine = 't-magazine',
  Travel = 'travel',
  Upshot = 'upshot',
  US = 'us',
  World = 'world',
}

export class GetTopStoriesDTO {
  @IsEnum(NewsSection)
  section: NewsSection;
}