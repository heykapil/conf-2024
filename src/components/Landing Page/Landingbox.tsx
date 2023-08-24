import Image from "next/image";
import Link from "next/link";
import logoPrimaryDark from "src/assets/logo-primary-dark.svg";
import greyEllipse from "src/assets/grey-ellipse.svg";
import { useFadeBackground } from "@/app/layout";

const Landingbox = () => {
  const fadeBackground = useFadeBackground();

  return (
    <div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      } mx-6 lg:mx-24 lg:w-[1024px]`}
    >
      <main className="relative p-[7px]">
        <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 left-0"></div>
        <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 right-0"></div>
        <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 left-0"></div>
        <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 right-0"></div>
        <div className="w-full h-full bg-white bg-opacity-70 border-[5px] border-blue-600">
          <section className="p-8 text-center mx-auto space-y-5">
            <Image
              src={logoPrimaryDark}
              alt="CUSEC 2024 logo primary dark"
              layout="responsive"
              className="max-w-lg mx-auto"
            />
            <p className="font-semibold text-[18px] leading-[25px] tracking-wider">
              Canadian University Software Engineering Conference
            </p>
            <p className="text-[15px] text-[#615757]">
              January 12-24
              <Image
                src={greyEllipse}
                alt="Grey Ellipse Icon"
                className="inline-block mx-3"
              ></Image>
              Montreal, QC
            </p>
            <button className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#AD65E3] px-5 md:px-20 py-3 text-center rounded-full uppercase text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-goldenApricot hover:text-white">
            Become a Speaker
            </button>
            <Link
              href=""
              className="md:hidden block text-royalBlue font-semibold underline underline-offset-2 decoration-2"
            >
              Interested in Sponsoring?
            </Link>
            <button className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hidden md:inline bg-[#FDF3FF] border-2 border-royalBlue ml-9 px-[85px] py-3 text-center rounded-full uppercase text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-royalBlue hover:text-white ">
              Sponsor
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Landingbox;