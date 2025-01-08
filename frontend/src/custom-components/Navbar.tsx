'use client'
import { useState } from "react";
import { BookmarkCheck, Menu, Search, X } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation"
import Link from "next/link";

const Navbar = () => {
    const [search, setSearch] = useState("")
    const pathName = usePathname();
    function isActive (path:string) {
        return  pathName === path ? 'underline' : ''
    }
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <div className="bg-neutral-900 w-full">
      <div className="flex justify-between items-center px-4 py-4 transition-all duration-100 z-10">
        <div className="text-white font-bold text-2xl">
          <img src="./favicon.ico"  height='200px' width={'200px'} className="w-[40px] h-[40px]"/>
        </div>

        <div onClick={() => setIsCollapsed(!isCollapsed)} className="md:hidden">
          <Menu size={26} className="text-white" />
        </div>
        <div className="hidden md:flex md:items-center justify-center">
        <li className="flex items-center">
        <div className="flex items-center relative">
            <Search size={30} className="text-slate-500 absolute p-1 left-1" />
            <input
                placeholder="Search movies..."
                className="text-stone-900 p-2 outline-none h-10 pl-10 rounded-3xl w-[40vw]"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
                <X className={clsx('text-gray-500 absolute right-1',{'block':search.length > 0,'hidden':search.length < 1})} size={20} />
        </div>
        </li>
        </div>
        <div className={clsx('transition-all duration-500 md:opacity-100',{'opacity-100':isCollapsed,'opacity-0':!isCollapsed})} >
        <ul className="text-white flex flex-col gap-2 font-bold absolute md:relative md:flex-row md:items-center md:gap-8 left-0 top-[4em] md:top-0 w-full px-2 py-4 bg-stone-900">
        <Link href={'/'}><li className={isActive('/')}>Home</li></Link>
          <Link href={'/about'}><li className={`${isActive('/watchlist')} flex gap-1`}>
          <BookmarkCheck size={22} color="white" />
          <span>Watchlist</span>
          </li></Link>
          <li className={isActive('/file')}>Sign In</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
