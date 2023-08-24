import { useFadeBackground } from "@/app/layout";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const fadeBackground = useFadeBackground();
  return (
    <footer
      className={`transition-opacity ease-in-out duration-[1500ms] bg-black/[.85] w-full flex justify-center ${
        fadeBackground ? "opacity-0" : "opacity-100 text-red"
      }`}
    >
      <section className="flex items-baseline space-x-4 px-6 lg:mx-24 py-4">
        <Link
          href="/privacy"
          className="text-white font-[16px] bg-clip-text hover:text-transparent bg-gradient-to-tr from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3"
        >
          Privacy
        </Link>
        <Link
          href="/code-of-conduct"
          className="text-white font-[16px] bg-clip-text hover:text-transparent bg-gradient-to-tr from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3"
        >
          Code of Conduct
        </Link>

        {/* The following workaround with and svg had to be used because the react-icons package currently does not support a background gradient for its SVGs using the tailwind approach which is used in the NavLink components. */}
        <svg width="0" height="0">
          <linearGradient
            id="custom-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop stopColor="#AC65E3" offset="0%" />
            <stop stopColor="#E087BB" offset="50%" />
            <stop stopColor="#FFB963" offset="100%" />
          </linearGradient>
        </svg>

        <section className="flex items-center">
          <span className="transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm px-[2.5px] min-[390px]:px-3 md:px-4">
            <Link href={"https://www.facebook.com/cusecofficial/"} target="_blank">
              <FaFacebookF style={{ fill: "url(#custom-gradient)" }} />
            </Link>
          </span>
          <span className="transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm px-[2.5px] min-[390px]:px-3 md:px-4">
            <Link href={"https://www.instagram.com/cusecofficial/?hl=en"} target="_blank">
              <FaInstagram style={{ fill: "url(#custom-gradient)" }} />
            </Link>
          </span>
          <span className="transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm px-[2.5px] min-[390px]:px-3 md:px-4">
            <Link href={"https://www.linkedin.com/company/cusec/mycompany/"} target="_blank">
              <FaLinkedinIn style={{ fill: "url(#custom-gradient)" }} />
            </Link>
          </span>
          <span className="transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm px-[2.5px] min-[390px]:px-3 md:px-4">
            <Link href={"https://www.youtube.com/channel/UCZ7j8F6h1CxD-uC0od9rHBw"} target="_blank">
              <FaYoutube style={{ fill: "url(#custom-gradient)" }} />
            </Link>
          </span>
        </section>
      </section>
    </footer>
  );
}
