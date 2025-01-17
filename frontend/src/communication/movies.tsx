'use client'
import { movieEditType, PostMovieData, uploadImageDataType } from "@/types/movies";
import axiosInstance from "@/utils/instance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GetAllMovies = () => {
  return useQuery({
      queryKey:['allMovies'],
      queryFn:async () => {
         const data = await axiosInstance.get('/movies');
         return data;
      }
    })
}

export const searchMovies = async (movieData:{movieName:string}) => {
  try {
     const data = await axiosInstance.post('/search-movies',movieData)
     return data;
  } catch (e) {
    console.log("Erorr while gettting search resources",e)
  }
}

// edit movies

export const updateMovie = async (data:movieEditType) => {
  try {
      const doc = await axiosInstance.put('/movies',data);
      console.log("Successfully updated",doc);
  } catch (e) {
     console.log("Error while updating resources",e)
  }
}

const postMovies = async (data:PostMovieData) => {
    try {
        await axiosInstance.post('/movies',data )
        console.log("upload success")
    } catch {
        throw new Error("Error while uploading movies")
    }
}

export const uploadImage = async (formData:uploadImageDataType) => {
  try {
    const response:unknown =  await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,formData)
    if (typeof response === 'object' && response !== null && 'data' in response) {
      const data = (response as { data: { secure_url: string } }).data; // Narrowing the type to access data
      const url = data?.secure_url;
      console.log(url);
      return url;
    } else {
      console.error("Response format is not as expected");
      return null;
    }
  } catch (e) {
    console.log("Error while uploading file",e)
  }
}



export default postMovies;