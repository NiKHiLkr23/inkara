import { TwitterIcon } from "@/components/common/icons";
import Image from "next/image";
import Link from "next/link";

const teamData = [
  {
    name: "StoneX",
    role: "Founder",
    twitterUrl: "",
    image: "https://inkara.s3.ap-south-1.amazonaws.com/IMG-20231217-WA0002.jpg",
  },
  {
    name: "Assasin",
    role: "Advisor",
    twitterUrl: "",
    image: "https://inkara.s3.ap-south-1.amazonaws.com/IMG-20231217-WA0002.jpg",
  },
  {
    name: "Niick",
    role: "Developer",
    twitterUrl: "",
    image: "https://inkara.s3.ap-south-1.amazonaws.com/IMG-20231217-WA0002.jpg",
  },
];
export default function TeamPage() {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        {/* <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Our team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            aut mollitia accusamus eum, perspiciatis ex!
          </p>
        </div> */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center w-full max-w-5xl mx-auto">
          {teamData.map((item) => (
            <div
              key={item.name}
              className="flex flex-col  text-gray-500   mb-5"
            >
              <div className="rounded-lg rotate-45 overflow-hidden w-44 h-44 border-8 border-gray-400 mb-12">
                <Image
                  width={1000}
                  height={1000}
                  className="rounded-lg -rotate-45 object-cover scale-150 "
                  src={item.image}
                  alt="Bonnie Avatar"
                />
              </div>
              <div className="text-center relative w-fit mx-auto mb-1 text-2xl font-bold tracking-tight ">
                <p className="inline-block"> {item.name}</p>
                <span className="absolute -right-8 top-1">
                  <Link href={item.twitterUrl} prefetch={false}>
                    <TwitterIcon className="w-6 h-6 text-[#39569c] cursor-pointer active:scale-95" />
                  </Link>
                </span>
              </div>
              <p>{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
