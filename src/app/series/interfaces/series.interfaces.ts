export interface Series {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            Data;
}

export interface Data {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Result[];
}

export interface Result {
  id:          number;
  title:       string;
  description: null | string;
  resourceURI: string;
  urls:        URL[];
  startYear:   number;
  endYear:     number;
  rating:      Rating;
  type:        string;
  modified:    string;
  thumbnail:   Thumbnail;
  creators:    Creators;
  characters:  Characters;
  stories:     Stories;
  comics:      Characters;
  events:      Characters;
  next:        Next | null;
  previous:    null;
}

export interface Characters {
  available:     number;
  collectionURI: string;
  items:         Next[];
  returned:      number;
}

export interface Next {
  resourceURI: string;
  name:        string;
}

export interface Creators {
  available:     number;
  collectionURI: string;
  items:         CreatorsItem[];
  returned:      number;
}

export interface CreatorsItem {
  resourceURI: string;
  name:        string;
  role:        string;
}

export enum Rating {
  Empty = "",
  MarvelPsr = "Marvel Psr",
  RatedT = "Rated T",
  RatingRatedT = "Rated T+",
}

export interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

export interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        ItemType;
}

export enum ItemType {
  Cover = "cover",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path:      string;
  extension: Extension;
}

export enum Extension {
  Jpg = "jpg",
}

export interface URL {
  type: URLType;
  url:  string;
}

export enum URLType {
  Detail = "detail",
}
