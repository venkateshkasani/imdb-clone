'use client'
import movieSchema from "@/schema/movies"
import { Star } from "lucide-react"
import Link from "next/link"

const Moviecard = ({data}:{data:any}) => {
  const truncatedPlot = data.plot.length > 25 ? data.plot.slice(0,25) + "..." : data.plot.slice;

  return (
    <div className="flex flex-col w-[20%] h-fit bg-neutral-900 rounded-xl">
      <Link href={`/movies/${data._id}`}>
      <img className="w-full rounded-t-xl h-[250px]" src={data.poster} />
       <div className="flex justify-between">
       <span className="flex gap-1 my-2 px-1">
            <Star size={20} className="text-primary" />
            {data.imdbRating}
        </span>
        <span className="text-sm text-slate-200 mt-2 mr-1">
          {data.yearOfRelease}
        </span>
       </div>
        <p className="font-semibold text-lg px-1 min-h-[55px]">{data.movieName}</p>
        <div className="flex flex-col w-full p-1 mt-2 gap-2">
           <p><span className="text-slate-300">By</span><span className="text-primary font-semibold text-sm"> {data.director}</span></p>
        </div>
        <div className="flex flex-col w-full p-1 mt-2 gap-2">
           <p><span className="text-slate-300">Starring</span><span className="text-primary font-semibold text-sm"> {data.actors.map((actor:any,index:number) => {
            if(index < data.actors.length - 1) return actor + ',';
            else return actor;
           })}</span></p>
        </div>
        <div>
          <p className="text-xs">{data.plot.length > 25 ? truncatedPlot : data.plot }</p>
        </div>
      </Link>
    </div>
  )
}

export default Moviecard