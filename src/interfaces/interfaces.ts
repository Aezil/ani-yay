export enum MediaType {
  anime = 'ANIME',
  manga = 'MANGA',
}

export enum MediaStatus {
  finished = 'FINISHED',
  releasing = 'RELEASING',
  notYetReleased = 'NOT_YET_RELEASED',
  cancelled = 'CANCELLED',
  hiatus = 'HIATUS',
}

export interface Media {
  id: number;
  title: {
    romaji: string;
  };
  description: string;
  status: MediaStatus;
  type: MediaType;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  popularity: number;
  format: string;
}

export interface PageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  perPage: number;
}

export interface AnimeQueryResult {
  Page: {
    pageInfo: PageInfo;
    media: Media[];
  };
}
