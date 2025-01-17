export interface MovieType {
    _id: string|undefined;
    movieName: string|undefined;
    imdbRating: string|undefined;
    actors: string[] |undefined;
    producer: string|undefined;
    director: string|undefined;
    poster: string|undefined;
    yearOfRelease: string|undefined;  
    plot: string|undefined;
  }

export interface movieEditType {
    _id: string;
    actors: string[];
    director: string;
    imdbRating: string;
    movieName: string;
    plot: string;
    poster: string;
    producer: string;
    yearOfRelease: string;
  }

export interface PostMovieData {
    actors: string[] | undefined;
    director: string;
    imdbRating: string;
    movieName: string;
    plot: string;
    producer: string;
    yearOfRelease: string;
    poster:string
  }

export interface uploadImageDataType {
    file: File | null; // The file being uploaded
    upload_preset: string; // The upload preset
}