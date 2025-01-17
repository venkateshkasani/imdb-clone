import axiosInstance from "../utils/instance";
import { useQuery } from "@tanstack/react-query";

export const GetAllDirectors = () => {
   return useQuery({
       queryKey: ['allDirectors'],
       queryFn: async () => {
          const data = await axiosInstance.get('/directors');
          return data;
       }
     })
}

export const getAllDirectorsDirectly = async () => {
   const response = await axiosInstance.get('/directors')
   return response.data
}

export const postDirectors = async (data) => {
     try {
        await axiosInstance.post('/directors', data)
        console.log("Director data uploaded successfully")
     } catch (e) {
        console.log("Error while posting director data", e)
        throw new Error("Error while sending director data")
     }
}
