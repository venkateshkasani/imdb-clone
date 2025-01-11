import { z } from 'zod';

const movieSchema = z.object({
  movieName: z.string().min(5, { message: "Must be 5 or more characters long" }),
  imdbRating: z.string().regex(/^\d+(\.\d+)?$/, { message: "Must be a valid decimal number" }),
  actors: z.array(z.string()).min(1,{message:"Enter atleast one actor name"}),
  producer: z.string().min(4,{message:"Must be atleast 4 characters long"}),
  director: z.string().min(4,{message:"Must be atleast 4 characters long"}),
  yearOfRelease: z.string().regex(/^\d{4}$/, { message: "Must be a valid year (e.g., 2012)" }),
  poster: z.string().url({ message: "Must be a valid HTTPS link" }).regex(/^https:\/\//, { message: "Must start with 'https://'" }),
  plot: z.string(),
});

export default movieSchema;