import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-4 rounded-lg text-white">
      <div className="  flex flex-col items-center gap-4 md:items-start ">
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
        <p className="text-sm text-gray-400">Copyright © 2025 Bazario</p>
        <p className="text-sm text-gray-400">All rights reserved</p>
      </div>
      <div className="flex flex-col items-center gap-2 text-gray-400 md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/" className="">
          Homepage
        </Link>
        <Link href="/contact" className="">
          Contact
        </Link>
        <Link href="/privacy" className="">
          Privacy Policy
        </Link>
        <Link href="/terms" className="">
          Terms of Service
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2 text-gray-400 md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/" className="">
          All Products
        </Link>
        <Link href="/contact" className="">
          New Arrivals
        </Link>
        <Link href="/privacy" className="">
          Best Sellers
        </Link>
        <Link href="/terms" className="">
          Sale
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2 text-gray-400 md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/" className="">
          Homepage
        </Link>
        <Link href="/contact" className="">
          Contact
        </Link>
        <Link href="/privacy" className="">
          Privacy Policy
        </Link>
        <Link href="/terms" className="">
          Terms of Service
        </Link>
      </div>
    </div>
  );
};

export default Footer;
