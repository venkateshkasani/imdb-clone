'use client'
import Carousel_custom from "@/custom-components/Carousel_custom";
import Moviecard from "@/custom-components/Moviecard";
import { getAllMovies } from "@/communication/movies";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const joker = {
    title:"Joker",
    imdb:'9.0',
    source:'/joker.jpg',
    href:'https://www.joker.com'
  }

  const {data, isLoading} = getAllMovies();
  console.log("data",data)
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
    <div className="p-5 flex gap-10">
    {!isLoading ? data?.data?.map((movie:any,index:number) => {
       if(index > 5)return;
       return <Moviecard key={index} data = {movie} />
    }) : 
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
    )
    }
    </div>
    </div>
  );
}
