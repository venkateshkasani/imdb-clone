'use client'
import { useForm } from 'react-hook-form'
import MultiInput from '@/custom-components/multiInput'
import { useEffect, useState } from 'react'
import postMovies, { uploadImage } from '@/communication/movies'
import { getAllDirectorsDirectly, postDirectors } from '@/communication/directors'
import { ToastContainer, toast } from 'react-toastify';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { postProducers } from '@/communication/producers'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import movieSchema from '@/schema/movies'
import { Loader2 } from 'lucide-react'
import clsx from 'clsx'


const page = () => {
  type formType = z.infer<typeof movieSchema>
    const {handleSubmit, register,formState:{errors}, setValue, getValues, reset } = useForm<formType>({
      resolver:zodResolver(movieSchema)
    })
    const [multiInput,setMultiInput] = useState<string []>();
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>();
    const [directorsList,setDirectorsList] = useState([]);
    const [director, setDirector] = useState<any>();
    const [producer, setProducer] = useState<any>();




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
        console.log("upload response",data)
        return data;
    }

    const onSubmit = async (data:any) => {
        setIsLoading(true)
        data.actors = multiInput;   
        const url = await handleFileUpload();
        data.poster = url;
        const res = await postMovies(data);
        setIsLoading(false)
        toast("Created movie successfully")
        reset();
        setMultiInput([])
    }

    useEffect(() => {
        const getSearchResults = async () => {
                try {
                  console.log("trying")
                    const response = await getAllDirectorsDirectly();
                    console.log("response",response)
                    setDirectorsList(response || []);
                } catch (error) {
                    console.error("Error while getting search results", error);
                }
            }
        getSearchResults();
    }, []);

    const createDirector = async () => {
       const res = await postDirectors(director)
       toast('Director Data posted succesfully')
       setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

    const createProducer = async () => {
       const res = await postProducers(producer)
       toast('Producer Data posted succesfully')
       setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

    useEffect(() => {
       setValue('actors',multiInput!)
    },[multiInput])
    
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className="text-black font-semibold text-3xl mt-4 w-full text-center">Create a movie</div>
            <span className="text-gray-500 text-sm mb-2">Enter all the details to post..</span>
            <div className='flex justify-center w-full 1/2'>
            <form className='flex flex-col mb-4 gap-4 bg-gradient-to-tr from-transparent to-slate-700 h-fit w-1/2 p-3' onSubmit={handleSubmit(onSubmit)}>
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='movie name' {...register("movieName")} />
                {errors.movieName && <span className='text-sm text-red-500'>{errors.movieName.message}</span>}
                <div className='flex flex-col gap-1'>
                <Dialog>
      <DialogTrigger asChild>
      <Button className='bg-black w-fit text-primary font-semibold rounded hover:cursor-pointer'>Add new director +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-primary'>Add Director</DialogTitle>
          <DialogDescription>
             Enter details and click create to add director to the database.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              onChange={(e) => setDirector((prev:any) => ({...prev,name:e.target.value}))}
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gender" className="text-right">
              Gender
            </Label>
            <Input
              id="gender"
              onChange={(e) => setDirector((prev:any) => ({...prev,gender:e.target.value}))}
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dob" className="text-right">
              DOB
            </Label>
            <Input
              id="dob"
              onChange={(e) => setDirector((prev:any) => ({...prev,DOB:e.target.value}))}
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
            Bio
            </Label>
            <Input
              id="Bio"
              onChange={(e) => setDirector((prev:any) => ({...prev,Bio:e.target.value}))}
              defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
          <Button type="submit" onClick={() => createDirector()}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
                <select className='border-2 outline-none py-2 rounded px-1' {...register('director')}>
                    <option key={0} selected disabled hidden>Select a director</option>
                    {directorsList.map((director:any,index) => <option key={index}>{director.name}</option>)}
                </select>
                </div>
                <MultiInput placeholder='Type and press enter' callbackFunction={callbackFuntion} />
                <div className='flex flex-col gap-1'>
                <Dialog>
      <DialogTrigger asChild>
      <Button className='bg-black w-fit text-primary font-semibold rounded hover:cursor-pointer'>Add new Producer +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-primary'>Add Producer</DialogTitle>
          <DialogDescription>
             Enter details and click create to add producer to the database.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              onChange={(e) => setProducer((prev:any) => ({...prev,name:e.target.value}))}
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gender" className="text-right">
              Gender
            </Label>
            <Input
              id="gender"
              onChange={(e) => setProducer((prev:any) => ({...prev,gender:e.target.value}))}
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dob" className="text-right">
              DOB
            </Label>
            <Input
              id="dob"
              onChange={(e) => setProducer((prev:any) => ({...prev,DOB:e.target.value}))}
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
            Bio
            </Label>
            <Input
              id="Bio"
              onChange={(e) => setProducer((prev:any) => ({...prev,Bio:e.target.value}))}
              defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
          <Button type="submit" onClick={() => createProducer()}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='Producer name' {...register("producer")} />
                {errors.producer && <span className='text-sm text-red-500'>{errors.producer.message}</span>}
                </div>
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='imdb rating' {...register("imdbRating")} />
                {errors.imdbRating && <span className='text-sm text-red-500'>{errors.imdbRating.message}</span>}
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='Release year' {...register("yearOfRelease")} />
                {errors.yearOfRelease && <span className='text-sm text-red-500'>{errors.yearOfRelease.message}</span>}
                <input className='text-stone-900 py-2 px-1 border-2 outline-none my-2 h-10 rounded' placeholder='Plot' {...register("plot")} />
                {errors.plot && <span className='text-sm text-red-500'>{errors.plot.message}</span>}
                <input type='file' onChange={handleImageChange} />
                <button type='submit' className='bg-black text-primary font-semibold rounded p-2 hover:text-yellow-500'>
                  <span className={clsx('inline',isLoading && 'hidden')}>Create</span>
                  <Loader2 size={18} className={clsx('text-primary inline',{'animate-spin':isLoading,'hidden':!isLoading})} />
                </button>
            </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default page;