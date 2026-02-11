import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import { Bell, HomeIcon } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      <Link href="/" className="flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="EcomGitHub Logo"
          width={150}
          height={50}
          className="w-6 h-6 md:w-9 md:h-9 "
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          Bazario
        </p>
      </Link>

      <div className="flex items-center gap-4">
        {" "}
        <Searchbar />
        <Link href="/" className="">
          <HomeIcon className="w-4 h-4 text-gray-500" />
        </Link>
        <Bell className="w-4 h-4 text-gray-500" />
        <ShoppingCartIcon />
        <Link href="/login">
          <button className="bg-blue-300 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-400 transition">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
