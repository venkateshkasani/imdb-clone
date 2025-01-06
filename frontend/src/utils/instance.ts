import axios from 'axios'

const postMovies = async (data:any) => {
    try {
        await axios.post('http://localhost:8000/movies',data)
        console.log("upload success")
    } catch {
        throw new Error("Error while uploading movies")
    }
}

export default postMovies;

