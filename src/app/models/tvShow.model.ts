export interface TvShows {
    page: number;
    results: TvShow[];
    total_pages: number;
    total_results: number;
}

export interface TvShow {
backdrop_path: string;
first_air_date: string;
genre_ids: any;
id: number;
name: string;
origin_country: any;
original_language: any;
original_name: string;
overview: string;
popularity: number;
poster_path: string;
vote_average: number;
vote_count: number;
}
