'use client'
import { getAllMovies } from "@/communication/movies";
import { Edit, Star } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MultiInput from "@/custom-components/multiInput";
import { movieType } from "@/utils/movieFormType";
import { Controller, SubmitHandler,useForm } from "react-hook-form";
import movieSchema from "@/schema/movies";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


const page = ({params}:{params:any}) => {
  type movieType = z.infer<typeof movieSchema>
  const {register, control, handleSubmit,formState:{errors},watch} = useForm<movieType>({
    resolver:zodResolver(movieSchema)
  })

  // const {data,isLoading} =  getAllMovies();
  // const filtered = data?.data.filter((movie:any) => movie._id == params.slug)
  // const movie = filtered[0];

  // const count = useSelector((state:RootState) => state.counter.value);
  // const dispatch = useDispatch();
  const movie = {
    actors: ['Tom Cruise', 'Miles Teller'],
    director: 'Joseph Kosinski',
    imdbRating: '8.3',
    movieName: 'Top Gun: Maverick',
    plot: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOPGUN's elite graduates on a mission.",
    poster: 'https://res.cloudinary.com/df5j5zzmv/image/upload/v1736246987/yvrsyknhwx9sycpkyykz.jpg',
    producer: 'Jerry Bruckheimer',
    yearOfRelease: '2022',
    __v: 0,
    _id: '677d06cc6a5d8af9bed1fc56'
  };  
  console.log("movie",movie)
  
  const [formData, setFormData] = useState<movieType>({
    movieName:'',
    imdbRating:'',
    dires:'',
    producer:'',
    director:'',
    yearOfRelease:'',
    poster:'',
    plot:''
  })

  const updateActors = (data:string[]) => {
      setFormData((prev) => ({...prev,actors:data}))
      console.log("Actors changed")
  }

  const onSubmit = (data:any) => {
     console.log("formdata",data)
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
            <Sheet>
      <SheetTrigger asChild>
       <Edit className="inline ml-2 hover:cursor-pointer" size={24} />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="mb-4">Edit movie details</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit,(err) => console.log("errors",err))} className="flex flex-col gap-3">
          <div className="flex flex-col">
            <Label htmlFor="name" className="">
              Movie name
            </Label>
            <input id="name" {...register('movieName')} className="border-2"/>
            <span>{errors.movieName && 'Enter a valid movie name'}</span>
          </div>
          <div className="">
            <Label className="text-right">
              Actors
            </Label>
            {/* <Controller
            name="actors"
            control={control}
            render={({field}) => <MultiInput {...field} placeholder="Actors.." callbackFunction={updateActors} />}
             /> */}
             <Controller
            name='dires'
            defaultValue=""
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
            <span>{errors.dires && 'Enter actor names'}</span>
          </div>
          <div className="">
            <Label className="text-right">
              Director
            </Label>
            <Controller
            name='director'
            defaultValue="nolan bhai"
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
          </div>
          <div className="">
            <Label className="">
              Producer
            </Label>
            <Controller
            name='producer'
            defaultValue="bhAAi"
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
          </div>
          <div className="">
            <Label className="">
              Rating
            </Label>
            <Controller
            name='imdbRating'
            defaultValue=""
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
          </div>
          <div className="">
            <Label className="">
              Poster
            </Label>
            <Controller
            name='poster'
            defaultValue=""
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
          </div>
          <div className="">
            <Label className="">
              Plot
            </Label>
            <Controller
            name='plot'
            defaultValue=""
            control = {control}
            render = {({field}) => <Input {...field} type="text" />}
             />
          </div>
          <SheetFooter>
          <SheetClose asChild>
          <Button type="submit" className="m-2 text-primary font-semibold">Save changes</Button>
          </SheetClose>
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
        <p>{movie.actors.map((act:any,index:number) => <p key={index} className="text-primary text-2xl font-semibold">{act}</p>)}</p>
        </div>
       </div>
    </div>
    </div>
  )
}

export default page