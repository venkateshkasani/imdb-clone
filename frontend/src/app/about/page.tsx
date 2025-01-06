'use client'
import { useForm, SubmitHandler} from 'react-hook-form'
import MultiInput from '@/custom-components/multiInput'
import { useState } from 'react'
import postMovies from '@/utils/instance'
const page = () => {
    const {handleSubmit, register } = useForm()
    const [multiInput,setMultiInput] = useState<string[]>();
    const callbackFuntion = (arr:string[]) => {
        setMultiInput(arr);
        console.log("triggerd callback",multiInput)
    }
    const onSubmit = async (data:any) => {
        data.actors = multiInput;
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if(key=='poster') {
                formData.append(key,data[key][0])
            } else {
                formData.append(key,data[key])
            }
        })
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        console.log('data',data)
        const res = await postMovies(formData);
    }
    return (
        <div>
            <div className='flex justify-center'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='movie name' {...register("moviename")} />
                <select className='border-2 outline-none py-2 rounded px-1' {...register('director')}>
                    <option selected disabled hidden>Select a director</option>
                    <option>Nolan</option>
                    <option>Speilfarg</option>
                    <option>Cameron</option>
                    <option>Snyder</option>
                </select>
                <MultiInput placeholder='Enter actor names...' callbackFunction={callbackFuntion} />
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='Producer name' {...register("producer")} />
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='imdb rating' {...register("imdbRating")} />
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='Release year' {...register("yearOfRelease")} />
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='Plot' {...register("plot")} />
                <input type='file' {...register('poster')} />
                <button type='submit' className='p-2 bg-slate-800 text-slate-100 rounded'>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default page;