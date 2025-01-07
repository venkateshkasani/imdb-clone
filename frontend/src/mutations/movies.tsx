import axiosInstance from "@/utils/instance";
import axios from "axios";

const postMovies = async (data:any) => {
    try {
        await axiosInstance.post('/movies',data )
        console.log("upload success")
    } catch {
        throw new Error("Error while uploading movies")
    }
}

export const uploadImage:any = async (formData:any) => {
  try {
    const response:any =  await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,formData)
    const url = response.data.secure_url;
    return url;
  } catch (e) {
    console.log("Error while uploading file",e)
  }
}



export default postMovies;