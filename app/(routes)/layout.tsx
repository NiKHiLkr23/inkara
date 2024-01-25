import type { Metadata } from "next";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-bgSecondary bg-cover bg-no-repeat overflow-y-scroll overflow-x-hidden md:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-yellow-400/50   md:h-screen flex flex-col ">
      <Navbar />
      <main className=" ">{children}</main>
      <div className="flex flex-col grow justify-end">
        <Footer />
      </div>
    </div>
  );
}
