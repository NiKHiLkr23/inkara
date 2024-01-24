import LayoutCards from "@/components/about-us/layout-card";

export default function AboutUsPage() {
  return (
    <section className="flex flex-col items-center w-full max-w-6xl mx-auto p-4  lg:p-12 ">
      <h1 className="text-center text-2xl text-theme py-5">About us</h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around w-full ">
        <LayoutCards />

        <div className="flex flex-col items-start justify-start md:w-1/2 ">
          <p className="text-justify font-mono bg-gradient-to-tr from-theme to-gray-200 bg-clip-text text-transparent lg:text-xl ">
            Discover the magic of animated NFTs with Inkara NFT, an
            anime-inspired animated collection, which will bring back the anime
            culture on Solana. Inkara is Gearing up to Become the Biggest Anime
            IP on Solana ever Why Anime IP? Simply because we love it. Over the
            past year, We&apos;ve diligently curated the right team – Designers,
            Developers, Artists, Animators, – Giving rise to Inkara Studio
            almost effortlessly. We are not just Building IP but we have a
            really cool fully animated PFP collection. &quot;we are forming a
            worldwide community that unites Creators, Artists, Anime
            Enthusiasts, and Innovators.&quot;
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
