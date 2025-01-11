import { z } from 'zod';

const movieSchema = z.object({
  movieName: z.string().min(5, { message: "Must be 5 or more characters long" }),
  imdbRating: z.string().min(5, { message: "Must be 5 or more characters long" }),
  dires: z.string(),
  producer: z.string(),
  director: z.string(),
  yearOfRelease: z.string(),
  poster: z.string(),
  plot: z.string(),
});

export default movieSchema;