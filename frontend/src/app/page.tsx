'use client'
import Carousel_custom from "@/custom-components/Carousel_custom";
import Moviecard from "@/custom-components/Moviecard";
import { getAllMovies } from "@/communication/movies";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getAllDirectors } from "@/communication/directors";
import DirectorCard from "@/custom-components/DirectorCard";

export default function Home() {
  const {data, isLoading} = getAllMovies();
  const directors = getAllDirectors();
  console.log("directors data",directors?.data?.data)
  const movieArray = data?.data;
  const directorArray = directors?.data?.data;
  const subArrays = (mainArray:any) => {
     const op = [];
     for(let i=0;i<mainArray?.length;i+=6) {
      const subArr = [];
         for(let k = 0;k<6 && (k+i) < mainArray.length ;k++) {
            subArr.push(mainArray[k+i])
         }
         op.push(subArr)
     }
     return op;
  }

  const carouselMovies = subArrays(movieArray)
  console.log("carouselmovies",carouselMovies)
  const carouselDirectors = subArrays(directorArray);
  console.log("directors",carouselDirectors)

  return (
    <div className="bg-black text-white h-full">
    <div className="ml-5 pt-5 flex w-fit">
    <Carousel_custom />
    <div className="mx-4 hidden md:block">
      <p className="text-primary font-bold text-2xl text-start">Up Next</p>
      <div className="flex flex-col gap-4 mt-2">
      <div className="bg-slate-800 opacity-80 w-[300px] h-[150px] rounded-lg">
      <img src="/superman_banner.jpg" className="h-full w-full cardImage rounded-md" />
      </div>
      <div className="bg-slate-800 opacity-80 w-[300px] h-[150px] ">
      <img src="/batman-2.jpg" className="h-full w-full cardImage rounded-md" />
      </div>
      <div className="bg-slate-800 opacity-80 w-[300px] h-[150px] rounded-lg">
      <img src="/fantastic-4.jpg" className="h-full w-full cardImage rounded-md" />
      </div>
      </div>
    </div>
    </div>
    <div>
      {/* <p className="text-primary text-3xl ml-4 font-semibold mt-10">Top Rated Movies: </p> */}
      <div className="mx-5 py-10">
      {!isLoading ? 
      <Carousel className="mx-10">
      <CarouselPrevious />
        <CarouselContent>
      {!isLoading && carouselMovies?.map((arr:any,index:number) => {
        return (
          <CarouselItem key={index} className="flex gap-2">
            {arr.map((movie:any,index:number) => <Moviecard key={index} data = {movie} />)}
          </CarouselItem>
        )
      })
      }
           </CarouselContent>
           <CarouselNext />
      </Carousel>
       : 
      (
  <div className="flex gap-5 flex-wrap">
    {
      Array.from({length:8}).map((_,index) => (
        <div key={index} className="flex flex-col space-y-3">
            <Skeleton key={index} className="h-[200px] w-[150px] bg-gray-900 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px] bg-slate-600" />
              <Skeleton className="h-4 w-2/3 bg-slate-600" />
            </div>
        </div>
      ))
    }
  </div>
)}
    </div>
    </div>
    <div>
      <p className="text-primary font-semibold text-3xl px-5">Top Directors: </p>
    </div>
    <div className="mx-5 py-10">
      {!directors.isLoading ? 
      <Carousel className="mx-10">
      <CarouselPrevious />
        <CarouselContent>
      {!directors.isLoading && carouselDirectors?.map((arr:any,index:number) => {
        return (
          <CarouselItem key={index} className="flex gap-2">
            {arr.map((director:any,index:number) => <DirectorCard data={director} />)}
          </CarouselItem>
        )
      })
      }
           </CarouselContent>
           <CarouselNext />
      </Carousel>
       : 
      (
  <div className="flex gap-5 flex-wrap">
    {
      Array.from({length:8}).map((_,index) => (
        <div key={index} className="flex flex-col space-y-3">
            <Skeleton key={index} className="h-[200px] w-[150px] bg-gray-900 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px] bg-slate-600" />
              <Skeleton className="h-4 w-2/3 bg-slate-600" />
            </div>
        </div>
      ))
    }
  </div>
)}
    </div>
    </div>
  )}

