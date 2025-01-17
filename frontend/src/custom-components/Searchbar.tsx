'use client'
import { searchMovies } from "@/communication/movies"
import { movieEditType } from "@/types/movies"
import { movieType } from "@/utils/dataType"
import clsx from "clsx"
import { Search,X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const Searchbar = () => {
    const [search, setSearch] = useState<string>('')
    const [searchResults, setSearchResults] = useState<movieType[] | undefined[]>([])
    const [focusSearch, setFocusSearch] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(true)
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(search.length > 0 && focusSearch) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    },[search,focusSearch])

    useEffect(() => {
      const searchElement = searchRef.current;
      searchElement!.addEventListener('focus',() => setFocusSearch(true))
      searchElement!.addEventListener('blur',() => setFocusSearch(false));
    }, [])

    useEffect(() => {
        const getSearchResults = async () => {
            if (search) {
                try {
                    const response = await searchMovies({ movieName: search });
                    console.log("response",response?.data)
                    setSearchResults(response?.data || []);
                } catch (error) {
                    console.error("Error while getting search results", error);
                }
            } else {
                setSearchResults([]);
            }
        };
        getSearchResults();
    }, [search]);


    return (
        <div className="relative">
            <div className="flex items-center">
                <Search size={30} className="text-slate-500 absolute p-1 left-1" />
                <input
                    ref={searchRef}
                    placeholder="Search movies..."
                    className="text-stone-900 p-2 outline-none h-10 pl-10 rounded-3xl w-[40vw]"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                    <X onClick={() => setSearch('')} className={clsx('text-gray-500 absolute right-1 hover:cursor-pointer',{'block':search.length > 0,'hidden':search.length < 1})} size={20} />
            </div>
            <div className={clsx("absolute max-h-[50vh] overflow-y-auto top-10 z-10 w-full rounded mt-1 bg-slate-200 text-black font-semibold flex flex-col gap-2",{'hidden':!open})}>
                {searchResults?.map((movie:movieEditType|any,index:number) => (
                    <Link key={index} href={`/movies/${movie?._id}`} className="hover:bg-gray-300">
                    <span onClick={() => console.log("selected",movie?.movieName??'')} className="p-2">
                       {movie.movieName}
                    </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Searchbar