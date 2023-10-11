export interface NewsItem {
  title: string;
  section: string;
  subSection: string;
  abstract: string;
  author: string;
  image: string;
  url: string;
  publishedAt: string;
}

export interface ToppStoriesResult {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[]; // Assuming des_facet is an array of strings
  org_facet: string[]; // Assuming org_facet is an array of strings
  per_facet: string[]; // Assuming per_facet is an array of strings
  geo_facet: string[]; // Assuming geo_facet is an array of strings
  multimedia: MultimediaItem[]; // Assuming multimedia is an array of MultimediaItem objects
}

export interface MultimediaItem {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  short_url: string;
}
