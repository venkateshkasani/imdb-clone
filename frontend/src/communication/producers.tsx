import { PostProducerType } from "@/types/producers"
import axiosInstance from "@/utils/instance"

export const postProducers = async (data:PostProducerType) => {
    try {
       await axiosInstance.post('/producers',data)
       console.log("Producer data uploaded successfully")
    } catch (e) {
       console.log("Error while posting producer data",e)
       throw new Error("Error while sending producer data")
    }
}