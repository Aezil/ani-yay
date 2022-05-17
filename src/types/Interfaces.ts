export interface Media {
  id: number;
  title: {
    romaji: string;
    english: string;
  };
  description: string;
  type: string;
  status: string;
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
  genres: string[];
}

export interface PageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  perPage: number;
}

export interface PageQueryResult {
  pageInfo: PageInfo;
  media: Media[];
}
