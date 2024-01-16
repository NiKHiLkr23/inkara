import LayoutCards from "@/components/about-us/layout-card";

export default function AboutUsPage() {
  return (
    <section className="flex flex-col items-center w-full max-w-5xl mx-auto p-4  lg:p-12 ">
      <h1 className="text-center text-2xl text-theme py-5">About us</h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around">
        <div className="relative">
          <LayoutCards />
        </div>
        <div className="flex flex-col items-start justify-start md:w-1/2 ">
          <p className="text-justify font-mono bg-gradient-to-tr from-theme to-gray-200 bg-clip-text text-transparent lg:text-xl ">
            Discover the magic of animated NFTs with Inkara NFT, an
            anime-inspired animated collection, which will bring back the anime
            culture on Solana. Each limited piece is a handcrafted masterpiece,
            bringing characters to life through mesmerizing motion, seamlessly
            combining Art and Animation. Inkara NFTs grant more than just
            ownership, they unlock access to future drops, events, and a brand
            inkara NFT is Building.
          </p>
        </div>
      </div>
      <div>
        <p className="text-justify font-mono bg-gradient-to-tr from-theme to-gray-200 bg-clip-text text-transparent lg:text-xl pt-3">
          In the World of Inkara, where every NFT has its own story, every
          collector a storyteller, and together, we&apos;re rewriting the script
          for the future of Inkara NFT.
        </p>
      </div>
    </section>
  );
}
