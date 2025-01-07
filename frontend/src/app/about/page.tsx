'use client'
import { useForm } from 'react-hook-form'
import MultiInput from '@/custom-components/multiInput'
import { useEffect, useState } from 'react'
import postMovies, { uploadImage } from '@/mutations/movies'
const page = () => {
    const {handleSubmit, register } = useForm()
    const [multiInput,setMultiInput] = useState<string[]>();
    const [file, setFile] = useState<File | null>(null);
    const handleImageChange = (e:any) => {
        setFile(e.target.files[0]);
        console.log("file chaged",file)
      };
    const callbackFuntion = (arr:string[]) => {
        setMultiInput(arr);
        console.log("triggerd callback",multiInput)
    }
    const handleFileUpload = async () => {
        const formData = new FormData()
        formData.append('file',file??'')
        formData.append('upload_preset','posters')
        const data = await uploadImage(formData)
        return data;
    }
    const onSubmit = async (data:any) => {
        data.actors = multiInput;   
        const url = await handleFileUpload();
        data.poster = url;
        const res = await postMovies(data);
    }
    return (
        <div>
            <div className='flex justify-center'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='movie name' {...register("movieName")} />
                <select className='border-2 outline-none py-2 rounded px-1' {...register('director')}>
                    <option key={0} selected disabled hidden>Select a director</option>
                    <option key={1}>Christopher Nolan</option>
                    <option key={2}>Greta Gerwig</option>
                    <option key={3}>Chloé Zhao</option>
                    <option key={4}>Steven Spielberg</option>
                    <option key={5}>Sofia Coppola</option>
                    <option key={6}>Martin Scorsese</option>
                    <option key={7}>Patty Jenkins</option>
                    <option key={8}>Guillermo del Toro</option>
                    <option key={9}>Kathryn Bigelow</option>
                    <option key={10}>Alfonso Cuarón</option>
                    <option key={11}>Jane Campion</option>
                    <option key={12}>Denis Villeneuve</option>
                    <option key={13}>Ava DuVernay</option>
                    <option key={14}>Wes Anderson</option>
                    <option key={15}>Lynne Ramsay</option>
                    <option key={16}>Ridley Scott</option>
                    <option key={17}>Sally Potter</option>
                    <option key={18}>Spike Lee</option>
                    <option key={19}>Agnès Varda</option>
                    <option key={20}>Joseph Kosinski</option>
                    <option key={21}>Matt Reeves</option>
                    <option key={22}>Damien Chazelle</option>
                    <option key={23}>Frank Darabont</option>
                    <option key={24}>Francis Ford Coppola</option>
                    <option key={25}>Quentin Tarantino</option>
                    <option key={26}>James Cameron</option>
                    <option key={27}>Zack Snyder</option>
                    <option key={28}>David Fincher</option>
                    <option key={29}>Robert Zemeckis</option>
                    <option key={30}>Lana Wachowski</option>
                    <option key={31}>Peter Jackson</option>
                    <option key={32}>Todd Phillips</option>
                    <option key={33}>Kevin Feige</option>
                    <option key={34}>Russo brothers</option>
                    <option key={35}>Chad Stahelski</option>
                    <option key={36}>Marc Webb</option>
                </select>
                <MultiInput placeholder='Enter actor names...' callbackFunction={callbackFuntion} />
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='Producer name' {...register("producer")} />
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='imdb rating' {...register("imdbRating")} />
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='Release year' {...register("yearOfRelease")} />
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='Plot' {...register("plot")} />
                <input type='file' onChange={handleImageChange} />
                <button type='submit' className='p-2 bg-slate-800 text-slate-100 rounded hover:rounded-xl transform-all duration-200' >Submit</button>
            </form>
            </div>
        </div>
    )
}

export default page;