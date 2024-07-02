export interface Stories {
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
  description: string;
  resourceURI: string;
  urls:        URL[];
  modified:    string;
  start:       Date | null;
  end:         Date | null;
  thumbnail:   Thumbnail;
  creators:    Creators;
  characters:  Characters;
  stories:     StoriesClass;
  comics:      Characters;
  series:      Characters;
  next:        Next | null;
  previous:    Next | null;
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
  role:        Role;
}

export enum Role {
  Artist = "artist",
  Colorist = "colorist",
  ColoristCover = "colorist (cover)",
  Editor = "editor",
  Inker = "inker",
  InkerCover = "inker (cover)",
  Letterer = "letterer",
  Other = "other",
  Penciler = "penciler",
  PencilerCover = "penciler (cover)",
  Penciller = "penciller",
  PencillerCover = "penciller (cover)",
  RoleColorist = "Colorist",
  RoleLetterer = "Letterer",
  RolePenciller = "Penciller",
  Writer = "writer",
}

export interface StoriesClass {
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
  Credits = "credits",
  Empty = "",
  InteriorStory = "interiorStory",
  Pinup = "pinup",
  Promo = "promo",
  TableOfContents = "table of contents",
  TextArticle = "text article",
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
  Wiki = "wiki",
}
