'use client'

import { globalStateContext } from "@/provider/GlobalContextProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

export default function Navbar() {
  const pathName = usePathname();
  const { userLogged, setUserLogged } = useContext(globalStateContext);
  
  const logoutHandler = () => {
    setUserLogged(null);
  }
  
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/shop"
          className="flex items-center space-x-3 rtl:space-x-reverse h-10 w-10 relative"
        >
          <Image src="/store_logo.png" alt="store Logo" fill/>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          Welcome, {userLogged ? userLogged.username : 'Guest'}
          <Link
            href="/login"
            onClick={logoutHandler}
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
          >
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image src={userLogged ? userLogged.avatar : '/user_icon.png'} alt="user photo" fill/>
            </div>
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/shop"
                className={`${pathName === '/shop' ? 'text-blue-700' : ''} hover:text-blue-700`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className={`${pathName === '/login' ? 'text-blue-700' : ''} hover:text-blue-700`}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
