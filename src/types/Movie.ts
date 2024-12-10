export interface MovieProps {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  show: {
    id: number;
    name: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite?: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number | null;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
  };
}
