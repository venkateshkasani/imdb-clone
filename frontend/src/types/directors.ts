export interface GetDirectorType {
    _id: string;
    name: string;
    gender: string;
    DOB: string; // Assuming DOB is a string representation of a date
    Bio: string;
    __v: number;
    poster: string;
  }

 export interface PostDirectorType {
    name: string;
    gender: string;
    DOB: string; // Assuming DOB is a string representation of a date
    Bio: string;
    poster: string;
  }

