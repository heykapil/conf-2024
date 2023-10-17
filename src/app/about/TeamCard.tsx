import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";
import { motion } from "framer-motion";
import {
  FaRegEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
  FaInstagram,
} from "react-icons/fa";

type TeamCardProps = {
  name: string;
  university: string;
  //   image?: StaticImageData;
  image?: string;
  university_image?: string;
  pronouns: string;
  role: string;
  sub_role?: string; // Optional parameter
  program: string;
  linkedin?: string; // Optional parameter
  instagram?: string; // Optional parameter
  github?: string; // Optional parameter
  website?: string; // Optional parameter
  email: string;
  fun_fact: string;
};

const animateInConfig1 = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

const animateInConfig2 = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

export default function TeamCard(props: TeamCardProps) {
  return (
    <BlueBorderSquareBox teamCard={true}>
      <div className="flex flex-col items-center justify-center mx-6 mt-8 group self-start mb-2">
        <div className="aspect-square rounded-full bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-[140px] md:w-[165px] relative">
          {/* Picture of team member */}
          {props.image && (
            <Image
              src={props.image}
              alt={"Image of " + props.name}
              layout="fill"
              objectFit="cover"
              className="overflow-none p-1"
            />
          )}

          {/*Email Icon */}
          {props.email && (
            <a
              href={`mailto:${props.email}`}
              className="w-8 h-8 absolute right-1 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out border border-royalBlue rounded-full flex justify-center items-center p-1 hover:bg-royalBlue text-royalBlue hover:text-white hover:scale-125"
            >
              {/* <Image src={"/email_icon.svg"} alt="Email icon" layout="fill" /> */}
              <FaRegEnvelope className="w-5 h-5" />
            </a>
          )}

          {/* LinkedIn Icon */}
          {props.linkedin && (
            <a
              href={props.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 absolute top-8 -right-4 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out border border-[#05a7ff] rounded-full flex justify-center items-center p-1 hover:bg-[#05a7ff] text-[#05a7ff] hover:text-white hover:scale-125"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          )}

          {/* Github Icon */}
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 absolute top-[4.5rem] -right-[1.4rem] opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out border border-gray-500 rounded-full flex justify-center items-center p-2 hover:bg-gray-500 text-gray-500 hover:text-white hover:scale-125"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}

          {/* Website Icon */}
          {/* {props.website && (
            <a
              href={props.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 absolute bottom-[1.5rem] -right-[.8rem] opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out border border-green-500 rounded-full flex justify-center items-center p-2 hover:bg-green-500 text-green-500 hover:text-white hover:scale-125"
            >
              <FaGlobe className="w-5 h-5" />
            </a>
          )} */}

          {/* Instagram Icon */}
          {/* {props.instagram && (
            <a
              href={props.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 absolute -bottom-[0.1rem] right-[1rem] opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out border border-pink-500 rounded-full flex justify-center items-center p-2 hover:bg-pink-500 text-pink-500 hover:text-white hover:scale-125"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          )} */}

          {/* University logo */}
          <motion.div
            {...animateInConfig1}
            transition={transitionConfig(0.5)}
            className="flex absolute rounded-none -top-4 z-100 w-[60px] h-[60px]"
          >
            {props.university_image && (
              <Image
                src={props.university_image}
                alt={"Image of " + props.university}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-0 transition duration-700 ease-in-out"
              />
            )}
          </motion.div>
        </div>

        {/* Replacing text on hover with fade in/out animation */}
        {/* Name and University text */}
        <motion.div
          {...animateInConfig2}
          transition={transitionConfig(0.7)}
          className="text-center font-semibold md:text-[20px] whitespace-nowrap relative"
        >
          <div className="inline-block relative">
            <span className="invisible">
              {props.name.length > props.university.length
                ? props.name
                : props.university}
            </span>
            <span className="absolute transition-opacity duration-700 ease-in-out group-hover:opacity-0 top-0 left-1/2 transform -translate-x-1/2">
              {props.name}
            </span>
            <span className="absolute opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 top-0 left-1/2 transform -translate-x-1/2">
              {props.university}
            </span>
          </div>
        </motion.div>

        {/* Pronouns and Program text */}
        <motion.div
          {...animateInConfig2}
          transition={transitionConfig(0.9)}
          className="text-center whitespace-nowrap relative text-[8px] md:text-[12px]"
        >
          <div className="inline-block relative">
            <span className="invisible">
              {props.pronouns.length > props.program.length
                ? props.pronouns
                : props.program}
            </span>
            <span className="absolute transition-opacity duration-700 ease-in-out group-hover:opacity-0 top-0 left-1/2 transform -translate-x-1/2 bg-clip-text text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot">
              {props.pronouns}
            </span>
            <span className="absolute opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 top-0 left-1/2 transform -translate-x-1/2">
              {props.program}
            </span>
          </div>
        </motion.div>

        {/* Role and Fun Fact text */}
        <motion.div
          {...animateInConfig2}
          transition={transitionConfig(1.1)}
          className="text-center whitespace-nowrap relative"
        >
          <div className="inline-block relative">
            <span className="invisible">
              {props.role.length > props.program.length
                ? props.role
                : props.program}
            </span>
            <span className="absolute transition-opacity duration-700 ease-in-out group-hover:opacity-0 top-0 left-1/2 transform -translate-x-1/2 text-[12px] md:text-[18px]">
              {props.role}
            </span>
            <span className="absolute opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 top-0 left-1/2 transform -translate-x-1/2 text-pink-600 text-[12px] md:text-[16px]">
              Fun Fact
            </span>
          </div>
        </motion.div>

        {/* Sub-role, email, and fun fact content */}
        <motion.div
          {...animateInConfig2}
          transition={transitionConfig(1.3)}
          className="block relative"
        >
          <span className="invisible">
            {props.role.length > props.program.length
              ? props.role
              : props.program}
          </span>
          <span className="absolute transition-opacity duration-700 ease-in-out group-hover:opacity-0 top-0 left-1/2 transform -translate-x-1/2 text-[12px] md:text-[18px]">
            {props.sub_role && props.email ? (
              <>
                <p className="text-center text-[12px] md:text-[18px] whitespace-nowrap -mt-2 md:-mt-0">
                  <em>{props.sub_role}</em>
                </p>
                <a
                  href={`mailto:${props.email}`}
                  className="text-[10px] md:text-[14px] text-royalBlue hover:scale-105 transition ease-in-out duration-500 flex justify-center"
                >
                  {props.email}
                </a>
              </>
            ) : props.sub_role ? (
              <p className="text-center text-[12px] md:text-[18px] whitespace-nowrap -mt-2 md:-mt-0">
                <em>{props.sub_role}</em>
              </p>
            ) : props.email ? (
              <a
                href={`mailto:${props.email}`}
                className="text-[10px] md:text-[14px] text-royalBlue hover:scale-105 transition ease-in-out duration-500"
              >
                {props.email}
              </a>
            ) : (
              <></>
            )}
          </span>
          <span className="text-center absolute opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 top-0 left-1/2 transform -translate-x-1/2 text-[8px] md:text-[10px] w-full">
            {props.fun_fact}
          </span>
        </motion.div>

        {/* 
        <p>{props.linkedin}</p>
        <p>{props.instagram}</p>
        <p>{props.github}</p>
        <p>{props.website}</p>
        <p>{props.fun_fact}</p> */}

        {/*Pagination circles*/}
        <motion.div
          {...animateInConfig1}
          transition={transitionConfig(1.5)}
          className="flex space-x-1 sm:mt-6"
        >
          <span className="block h-3 w-3 rounded-full bg-purple-400 group-hover:bg-gray-300 transition ease-in-out duration-1000"></span>
          <span className="block h-3 w-3 rounded-full bg-gray-300 group-hover:bg-purple-400 transition ease-in-out duration-100"></span>
        </motion.div>
      </div>
    </BlueBorderSquareBox>
  );
}
