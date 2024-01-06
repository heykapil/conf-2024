import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";

// import "swiper/css";
import "swiper/css/bundle";

import WhyJoinDecagon from "../about/WhyJoinDecagon";
import learn_decagon from "@/components/About Us/Carousel Images/learn_decagon.svg";
import foster_icon from "./foster_icon.svg";
import connect_decagon from "@/components/About Us/Carousel Images/connect_decagon.svg";
import share_icon from "./share_icon.svg";
import discover_decagon from "@/components/About Us/Carousel Images/discover_decagon.svg";
import inspire_icon from "./inspire_icon.svg";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

export default function WhySpeak() {
  const [stretchValue, setStretchValue] = useState(300);

  const animateInConfigImage = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
  };

  const animateInConfigText = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };

  const transitionConfig = (delay = 0) => ({
    duration: 1.5,
    delay: delay,
    type: "spring",
    bounce: 0.1,
  });

  useEffect(() => {
    const handleResize = () => {
      setStretchValue(window.innerWidth > 1024 ? 300 : 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col items-center SwiperNavigationOverride">
      <motion.h2
        {...animateInConfigText}
        transition={transitionConfig(0)}
        className="flex items-center font-semibold text-[28px] md:text-[40px] tracking-tight mb-16"
      >
        <hr className="block w-2 h-10 bg-orange-300 mr-4" />
        Why Speak at CUSEC?
      </motion.h2>

      <motion.div
        {...animateInConfigImage}
        transition={transitionConfig(0.3)}
        className="flex flex-col items-center"
      >
        <div className="max-w-screen-lg md:max-w-screen-2xl">
          {/* Decagon Carousel*/}
          <div className="w-full h-[270px] md:h-[450px]">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                A11y,
                Keyboard,
                EffectCoverflow,
              ]}
              slidesPerView={2}
              initialSlide={1}
              grabCursor={true}
              centeredSlides={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: stretchValue,
                depth: 300,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={true}
              keyboard={true}
            >
              <SwiperSlide>
                <motion.div
                  {...animateInConfigImage}
                  transition={transitionConfig(0.3)}
                  className="flex justify-center"
                >
                  <WhyJoinDecagon
                    BackgroundImage={learn_decagon}
                    IconImage={foster_icon}
                    TitleText="Foster"
                    SubtitleText="relationships with students & like-minded professionals"
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  {...animateInConfigImage}
                  transition={transitionConfig(0.9)}
                  className="flex justify-center"
                >
                  <WhyJoinDecagon
                    BackgroundImage={connect_decagon}
                    IconImage={share_icon}
                    TitleText="Share"
                    SubtitleText="your knowledge, insights, & experiences"
                    mainDecagon
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  {...animateInConfigImage}
                  transition={transitionConfig(0.6)}
                  className="flex justify-center"
                >
                  <WhyJoinDecagon
                    BackgroundImage={discover_decagon}
                    IconImage={inspire_icon}
                    TitleText="Inspire"
                    SubtitleText="young tech-savvy minds"
                  />
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  );
}