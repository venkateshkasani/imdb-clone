'use client'
import { GetAllMovies, updateMovie } from "@/communication/movies";
import { Edit, LoaderCircle, Star, X } from "lucide-react";
import { Button } from "@/src/types/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet"
import MultiInput from "@/custom-components/multiInput";
import { Controller, useForm } from "react-hook-form";

const Page = ({params}) => {
  const {slug} = params;
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {register, control, handleSubmit, setValue, formState:{errors}} = useForm<formType>({
    // resolver:zodResolver()
  })

  const {data} =  GetAllMovies();
  const filtered = data?.data.filter((movie) => movie._id == slug)
  const movie = filtered[0];
  console.log("movie",movie)

  useEffect(() => {
   if(movie.actors) {
      setFormData((prev) => ({...prev,actors:movie.actors}))
   }
  },[])
  
  const [formData, setFormData] = useState<formType>({
    movieName:'',
    imdbRating:'',
    actors:[],
    producer:'', 
    director:'',
    poster:"",
    yearOfRelease:'',
    plot:''
  })

  const updateActors = (data) => {
      setFormData((prev) => ({...prev,actors:data}))
      setValue('actors',data);
      console.log("Actors changed")
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
     await updateMovie({...data,_id:params.slug})
     console.log("Updated brao!")
     setIsSubmitting(false);
     setIsSheetOpen(false);
  }

  return (
    <div className="bg-black min-h-[100vh]">
      <div className="flex gap-4 py-3">
       <div className="pl-5 pt-5">
        <img src={movie.poster} className="h-[50vh] w-[17vw] rounded" />
       </div>
       <div className="w-1/3 text-slate-400 flex flex-col gap-4">
          <span className="text-3xl font-semibold text-primary my-3 flex gap-1 items-center">
            <p>Movie Details </p>
            <Sheet open={isSheetOpen}>
      <SheetTrigger asChild>
       <Edit className="inline ml-2 hover:cursor-pointer" size={24} onClick={() => setIsSheetOpen(true)} />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <div className="flex justify-between">
          <SheetTitle className="mb-4 inline text-primary font-semibold">Edit movie details</SheetTitle>
          <X color="red" size={24} className="inline absolute right-2 top-2 opacity-0 hover:cursor-pointer" onClick={() => setIsSheetOpen(false)} />
          </div>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit,(err) => console.log("errors",err))} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" className="">
              Movie name
            </Label>
            <input id="name" defaultValue={movie.movieName} {...register('movieName')} className="border-2"/>
            <span className="validation">{errors.movieName && `${errors.movieName?.message}`}</span>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" className="">
              Year of Release
            </Label>
            <input id="name" {...register('yearOfRelease')} className="border-2" defaultValue={movie.yearOfRelease}/>
            <span className="validation">{errors.yearOfRelease && `${errors.yearOfRelease?.message}`}</span>
          </div>
          <div className="">
            <Label className="text-right">
              Actors
            </Label>
            <Controller
            name="actors"
            control={control}
            defaultValue={formData.actors}
            render={({field}) => <MultiInput {...field} initialData={formData.actors} placeholder="Actors.." callbackFunction={updateActors} />}
             />
            <span className="validation">{errors.actors && `${errors.actors.message}`}</span>
          </div>
          <div className="">
            <Label className="text-right">
              Director
            </Label>
            <Controller
            name='director'
            defaultValue={movie.director}
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
            <span className="validation">{errors.director && `${errors.director.message}`}</span>

          </div>
          <div className="">
            <Label className="">
              Producer
            </Label>
            <Controller
            name='producer'
            defaultValue={movie.producer}
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
            <span className="validation">{errors.producer && `${errors.producer.message}`}</span>

          </div>
          <div className="">
            <Label className="">
              Rating
            </Label>
            <Controller
            name='imdbRating'
            defaultValue={movie.imdbRating}
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
            <span className="validation">{errors.imdbRating && `${errors.imdbRating.message}`}</span>
          </div>
          <div className="">
            <Label className="">
              Poster
            </Label>
            <Controller
            name='poster'
            defaultValue={movie.poster}
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
            <span className="validation">{errors.poster && `${errors.poster.message}`}</span>

          </div>
          <div className="">
            <Label className="">
              Plot
            </Label>
            <Controller
            name='plot'
            defaultValue={movie.plot}
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
            <span className="validation">{errors.plot && `${errors.plot.message}`}</span>

          </div>
          <SheetFooter>
          {/* <SheetClose asChild> */}
          <Button type="submit" className="m-2 text-primary font-semibold">Save changes <LoaderCircle size={20} className={clsx('text-primay',isSubmitting && 'animate-spin',!isSubmitting && 'hidden')} /></Button>
          {/* </SheetClose> */}
        </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
          </span>
          <p className="text-blue-500 font-semibold">{movie.movieName}</p>
          <p><span className="text-slate-200">Release:</span> {movie.yearOfRelease}</p>
          <p><span className="text-slate-200 flex gap-1"><Star className="text-primary inlinr" size={20} />Rating:  {movie.imdbRating}</span></p>
          <p><span className='text-slate-200'>Plot: </span>{movie.plot}</p>
       </div>
       <div className="flex flex-col gap-2">
        <div>
        {movie.director === movie.producer ? <span className="text-slate-400">Produced and Directed by <p className="text-primary text-3xl block font-semibold">{movie.producer}</p></span> :
       <div className="flex gap-2">
        <div className="mx-2 border-r-red-400">
       <p className="text-slate-400">Directed by:</p>
       <p className="font-semibold text-3xl text-primary my-3">{movie.director}</p>
      </div>
      <div className="mx-2">
       <p className="text-slate-400">Produced by:</p>
       <p className="font-semibold text-3xl text-primary my-3">{movie.producer}</p>
      </div>
       </div>
       }
        </div>
        <div className="w-full text-slate-400 flex flex-col gap-2">
        <p>Starring: </p>
        <p>{movie.actors.map((act,index) => <p key={index} className="text-primary text-2xl font-semibold">{act}</p>)}</p>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Page