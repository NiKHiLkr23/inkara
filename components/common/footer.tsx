import { MailIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { DiscordIcon, TwitterIcon } from "./icons";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="p-5">
      <div className="flex justify-center  max-w-7xl mx-auto  text-theme ">
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span className="font-semibold text-base">©2023 INKARA</span>
        </div>
        {/* <div className="hidden lg:flex justify-center pt-4 space-x-6 lg:pt-0 lg:col-end-13">
          <Link
            rel="noopener noreferrer"
            href="mailto:contact.support@inkara.gmail.com"
            title="Email"
            className="text-xs"
          >
            <MailIcon className="w-6 h-6" />
          </Link>

          <Link rel="noopener noreferrer" href="">
            <TwitterIcon className="w-6 h-6" />
          </Link>
          <Link rel="noopener noreferrer" href="">
            <DiscordIcon className="w-6 h-6" />
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
