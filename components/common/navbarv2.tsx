"use client";
import { useRouter } from "next/navigation";
import { FC, useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { MenuSquare, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { DiscordIcon, TwitterIcon } from "./icons";
import MobileMenu from "./mobileMenu";

const navigation = [
  { name: "About us", href: "/about-us" },
  { name: "Team", href: "/team" },
];

export default function Navbarv2() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="sticky  top-0 z-50 h-screen w-full  flex items-center justify-start max-w-7xl mx-auto">
      <nav
        className="relative flex items-center justify-between w-full h-screen p-5 lg:px-8 bg-red-100  z-50"
        aria-label="Global"
      >
        <div className="absolute left-0 top-0 w-16 h-16 z-10 bg-black bg-opacity-50">
          <Link href="/" prefetch={false}>
            <span className="sr-only">Inkara</span>
            <Image
              // src="https://inkara.s3.ap-south-1.amazonaws.com/IMG-20231217-WA0002.jpg"
              src="https://inkara.s3.ap-south-1.amazonaws.com/InkaraLogo.png"
              width={100}
              height={100}
              alt=""
              className="scale-[2] "
            />
          </Link>
        </div>
        <div className=" lg:hidden">
          <MobileMenu />
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-12 lg:flex-1 lg:justify-end ">
          <TwitterIcon className="w-8 h-8" />
          <DiscordIcon className="w-8 h-8" />
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <Button variant="theme">{item.name}</Button>
            </Link>
          ))}
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <Button variant="theme">Wallet</Button>
            {/* <span aria-hidden="true">&rarr;</span> */}
          </Link>
        </div>
      </nav>
      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileNav}
        onClose={toggleMobileNav}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black bg-opacity-90 p-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 z-10 bg-black bg-opacity-50">
              <Link href="/" prefetch={false}>
                <span className="sr-only">Inkara</span>
                <Image
                  // src="https://inkara.s3.ap-south-1.amazonaws.com/IMG-20231217-WA0002.jpg"
                  src="https://inkara.s3.ap-south-1.amazonaws.com/InkaraLogo.png"
                  width={100}
                  height={100}
                  alt=""
                  className="scale-[2] "
                />
              </Link>
            </div>
            <button
              type="button"
              className="rounded-md  text-gray-700"
              onClick={toggleMobileNav}
            >
              <span className="sr-only">Close menu</span>
              <X size={46} color="#ffd538" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href={"/contact-us"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
}
