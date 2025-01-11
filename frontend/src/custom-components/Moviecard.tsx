'use client'
import { Star } from "lucide-react"
import Link from "next/link"

const Moviecard = ({data}:{data:any}) => {
  return (
    <div className="flex flex-col w-[20%] h-fit bg-neutral-900 rounded-xl">
      <Link href={`/movies/${data._id}`}>
      <img className="w-full rounded-t-xl h-[250px]" src={data.poster} />
        <span className="flex gap-1 my-2 px-1">
            <Star size={20} className="text-primary" />
            {data.imdbRating}
        </span>
        <p className="font-semibold text-lg px-1 min-h-[55px]">{data.movieName}</p>
        <div className="flex flex-col w-full items-center mt-2">
            <span className="p-2 px-4 text-sky-500 font-semibold flex gap-2 items-end justify-center bg-slate-600 rounded-full w-full">
             Watch options
            </span>
            <div className="flex items-center gap-9 my-3">
            <div className="flex gap-1 items-center">
            <p className="hover:cursor-pointer hover:text-slate-300">+ Add to Watchlist</p>
            </div>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default Moviecard