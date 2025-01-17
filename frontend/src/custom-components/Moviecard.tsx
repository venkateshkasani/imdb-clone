'use client'
import { MovieType } from "@/types/movies";
import { Pencil, Star } from "lucide-react"
import Link from "next/link"

const Moviecard = ({data}:{data:any}) => {
  const truncateLength = 40;
  const truncatedPlot = data.plot.length > truncateLength ? data.plot.slice(0,truncateLength) + "..." : data.plot.slice;
  const actorsString = data.actors.join(',')
  const truncatedActors = actorsString.length > 25 ? actorsString.slice(0,25) + '...' : actorsString
  const truncatedTitle = data.movieName.length > 30 ? data.movieName.slice(0,30) + '...' : data.movieName

  return (
    <div className="flex flex-col w-[20%] h-fit bg-neutral-900 rounded-xl relative">
      <Link href={`/movies/${data._id}`}>
      <Pencil size={20} className="text-primary font-semibold absolute right-1 top-1 hover:cursor-pointer transition-all duration-100" />
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
        <p className="font-semibold text-lg px-1 min-h-[55px]">{truncatedTitle}</p>
        <div className="flex flex-col w-full p-1 mt-2 gap-2">
           <p><span className="text-slate-300">Directed by:</span><div className="text-primary font-semibold text-sm"> {data.director}</div></p>
           <p><span className="text-slate-300">Produced by: </span><div className="text-primary font-semibold text-sm"> {data.producer}</div></p>
        </div>
        <div className="flex flex-col w-full p-1 mt-2 gap-2">
           <p><span className="text-slate-300">Starring: </span><span className="text-primary font-semibold text-xs">{truncatedActors}</span></p>
        </div>
        <div>
          <span className="text-slate-300">Plot: </span>
          <span className="text-xs text-primary">{data.plot.length > truncateLength ? truncatedPlot : data.plot }</span>
        </div>
      </Link>
    </div>
  )
}

export default Moviecard