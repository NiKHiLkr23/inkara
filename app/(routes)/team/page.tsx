import { TwitterIcon } from "@/components/common/icons";
import { teamData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-24 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-theme">
            Our team
          </h2>
          <p className="hidden font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            aut mollitia accusamus eum, perspiciatis ex!
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-5 w-full max-w-7xl mx-auto">
          {teamData.map((item) => (
            <div key={item.name} className="relative flex flex-col  ">
              <div className="rounded-lg overflow-hidden max-w-md md:max-w-sm bg-black">
                <Image
                  width={1000}
                  height={1000}
                  className="rounded-lg object-cover scale-95 opacity-80"
                  src={item.image}
                  alt="Bonnie Avatar"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-black/40">
                <div className="flex items-center justify-center w-full  ">
                  <p className="text-2xl font-bold tracking-tight text-white">
                    {" "}
                    {item.name}
                  </p>
                  {item.role === "Founder" && (
                    <Link
                      href={item.twitterUrl}
                      prefetch={false}
                      className="ml-2"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <TwitterIcon className="w-6 h-6 text-[#4d7ff1] cursor-pointer active:scale-95" />
                    </Link>
                  )}
                </div>
                <p className="text-lg mb-3 capitalize font-bold text-theme ">
                  {item.role} @INKARA
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
