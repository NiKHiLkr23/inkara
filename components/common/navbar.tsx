"use client";
import { FC, useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { MenuSquare, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { DiscordIcon, TwitterIcon } from "./icons";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const navigation = [
  { name: "About us", href: "/about-us" },
  { name: "Team", href: "/team" },
];

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky inset-x-0 top-0 z-50  flex flex-col w-full max-w-7xl mx-auto ">
      <nav className="flex items-center justify-between pt-5 px-3 lg:px-8 ">
        <div className="z-10 ">
          <Link
            href="/"
            prefetch={false}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Inkara</span>
            <Image
              src="/images/inkara-logo.png"
              width={100}
              height={100}
              alt=""
              className=" w-36"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuSquare size={46} color="#ffd538" />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-12 lg:flex-1 lg:justify-end   ">
          <Button
            onClick={() =>
              toast("Comming soon...", {
                style: {
                  backgroundColor: "#ffd538",
                  fontSize: "1.25rem",
                },
              })
            }
            variant="theme"
            className={` text-sm font-semibold leading-6 `}
          >
            Roadmap
          </Button>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <Button
                onClick={handleMobileMenu}
                variant="theme"
                className={`${
                  pathname === item.href ? "bg-theme text-white" : ""
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          {/* <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <Button variant="theme">Wallet</Button>
          </Link> */}

          <Link
            href="https://twitter.com/InkaraNFT"
            prefetch={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon className="w-8 h-8 text-[#f0bb40] cursor-pointer active:scale-95" />
          </Link>

          <Link
            href="https://discord.com/invite/inkaranft"
            prefetch={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            <DiscordIcon className="w-8 h-8 cursor-pointer active:scale-95" />
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-black  py-5 px-3 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="z-10 ">
              <Link
                href="/"
                prefetch={false}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Inkara</span>
                <Image
                  src="/images/inkara-logo.png"
                  width={100}
                  height={100}
                  alt=""
                  className=" w-36"
                />
              </Link>
            </div>
            <button
              type="button"
              className="rounded-md  text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X size={46} color="#ffd538" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* <div className=" flex w-full items-center justify-center pt-6">
                <Link href="/" className="">
                  <Button onClick={handleMobileMenu} variant="theme">
                    Connect Wallet
                  </Button>
                </Link>
              </div> */}
              <div className="flex flex-col items-center justify-center  py-6">
                <Button
                  onClick={() => {
                    toast("Comming soon...", {
                      style: {
                        backgroundColor: "#ffd538",
                        fontSize: "1.25rem",
                      },
                    });
                    handleMobileMenu();
                  }}
                  variant="link"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-theme"
                >
                  Roadmap
                </Button>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleMobileMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-theme"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-center gap-10">
                <Link
                  href="https://twitter.com/InkaraNFT"
                  prefetch={false}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TwitterIcon className="w-8 h-8 text-[#f0bb40] cursor-pointer active:scale-95" />
                </Link>

                <Link
                  href="https://discord.com/invite/inkaranft"
                  prefetch={false}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <DiscordIcon className="w-8 h-8 cursor-pointer active:scale-95" />
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
