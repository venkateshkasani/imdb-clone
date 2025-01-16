'use client'
import { useState } from "react";
import { BookmarkCheck, Menu } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation"
import Link from "next/link";
import Searchbar from "./Searchbar";

const Navbar = () => {
    const pathName = usePathname();
    function isActive (path:string) {
        return  pathName === path ? 'underline' : ''
    }
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <div className="bg-neutral-900 w-full">
      <div className="flex justify-between items-center px-4 py-4 transition-all duration-100 z-10">
        <div className="text-white font-bold text-2xl">
        </div>

        <div onClick={() => setIsCollapsed(!isCollapsed)} className="md:hidden">
          <Menu size={26} className="text-white" />
        </div>
        <div className="hidden md:flex md:items-center justify-center">
        <li className="flex items-center">
        <Searchbar />
        </li>
        </div>
        <div className={clsx('transition-all duration-500 md:opacity-100',{'opacity-100':isCollapsed,'opacity-0':!isCollapsed})} >
        <ul className="text-white flex flex-col gap-2 font-bold absolute md:relative md:flex-row md:items-center md:gap-8 left-0 top-[4em] md:top-0 w-full px-2 py-4 bg-stone-900">
        <Link href={'/'}><li className={isActive('/')}>Home</li></Link>
          <Link href={'/movies/create'}>
          <li className={`${isActive('/watchlist')} flex gap-1`}>
           Add movies
          </li>
          </Link>
          <li className={isActive('/file')}>Sign In</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
