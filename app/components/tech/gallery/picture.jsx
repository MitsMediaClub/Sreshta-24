"use client";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import styles from "./styles.module.css";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

function Picture() {
  let custom_data = [
    {
      slide_img: "/gallery/s1.png",
      main_img: [
        "/gallery/m1.png",
        "/gallery/img1.JPG",
        "/gallery/img2.JPG",
        "/gallery/img3.JPG",
        "/gallery/img4.JPG",
        "/gallery/img5.JPG",
      ],
      card_name: "Motor show",
      text: ["text1", "text1", "text1"],
    },
    {
      slide_img: "/gallery/s2.png",
      main_img: [
        "/gallery/m2.png",
        "/gallery/img1.JPG",
        "/gallery/img2.JPG",
        "/gallery/img3.JPG",
        "/gallery/img4.JPG",
        "./gallery/img5.JPG",
      ],
      //without ./ there is a 404 error while switching the slide
      card_name: "bharati nattitam",
      text: ["text1", "text1", "text1"],
    },
    {
      // slide_img: "/gallery/s3.png", //the size of the image s3.png was not proper
      slide_img: "/gallery/s2.png",
      main_img: [
        "/gallery/m3.png",
        "/gallery/img1.JPG",
        "/gallery/img2.JPG",
        "/gallery/img3.JPG",
        "/gallery/img4.JPG",
        "/gallery/img5.JPG",
      ],
      card_name: "mind games",
      text: ["text1", "text1", "text1"],
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }, // Slide out effect
  };

  const barVariants = {
    hidden: { backgroundColor: "rgba(17,22,21,0.5)" },
    visible: {
      opacity: 1,
      backgroundColor: "rgba(0,0,0,1)",
      padding: "0.2rem",
    },
    exit: { opacity: 1, padding: "0.1rem" }, //  animation for side bar
  };
  const [imageList, setimageList] = useState(custom_data[0].main_img);

  const [wind, setwind] = useState(5);
  const bigImg = useRef(null);
  const maincontainer = useRef(null);
  const swiperRef = useRef(null);

  const setSliderW = () => {
    // console.log("size changed",window.innerWidth)
    if (window.innerWidth <= 780) {
      setwind(2);
    } else {
      setwind(5);
    }
  };

  useLayoutEffect(() => {
    setSliderW();
    window.addEventListener("resize", setSliderW);
    if (swiperRef.current.swiper) {
      // console.log("swiper init");
    }
    const intervalId = setInterval(() => {
      // console.log(currentImageIndex)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length); //for updating the index to show the picture
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const detect = (e) => {
    //code for change the image when auto slide
    // console.log("slide changed",Swiper.activeIndex)
    if (undefined != custom_data[e]) {
      // console.log("slide changed", e);
      // console.log(custom_data[e].slide_img);
      bigImg.current.src = custom_data[e].main_img;
    }
  };

  const cardClick = (e, i) => {
    // console.log("card clicked", e, i);
    // setManinData(e)
    // bigImg.current.src = e.slide_imgs
    // console.log('index',swiperRef.current.activeIndex = 1)
    swiperRef.current.swiper.slideTo(i, 400, false);
    setCurrentImageIndex(0);
    // console.log(custom_data[i].main_img)
    setimageList(custom_data[i].main_img);
  };

  return (
    <>
      <div
        ref={maincontainer}
        className="h-[110vh] mobile:pt-4 mh:pt-4 mobile:h-[80vh] w-full overflow-hidden peat-round pt-20 relative flex justify-center"
      >
        {/*h-[110vh] to make the slider visible*/}
        <div
          className="relative h-[94vh] w-full flex justify-center  mobile:h-[60vh]
            mh:h-[97vh]"
        >
          <div
            className={`vertical absolute z-40 gap-0 justify-between w-[5%] h-3/6 flex items-center flex-col bg-green- top-[25%] right-5
                mobile:opacity-0 mh:opacity-0 tw:opacity-0 ${styles.kivi_t}
                `}
          >
            <div className={`py-4 text-4xl`}>0{currentImageIndex + 1}</div>
            {imageList.map((e, i) => {
              return (
                <motion.div
                  key={i}
                  variants={barVariants}
                  initial="hidden"
                  animate={currentImageIndex === i ? "visible" : "exit"}
                  transition={{ ease: "linear", duration: 0.5 }}
                  className="grow p-[0.1rem] hover:bg-black"
                ></motion.div>
              );
            })}
            <div className="py-4 text-4xl">0{imageList.length}</div>
          </div>
          <motion.div className="bg-cover bg-no-repeat bg-center relative h-[100%] w-[85%] mobile:w-[97%] mh:w-[80%] tw:w-[90%] -z-0 flex justify-center ">
            <div className="h-full w-full LPICON2 border-[0.5rem] absolute z-50"></div>
            <Image
              height={1000}
              width={1000}
              className="absolute top-0 w-[100%] h-[100%] object-cover mix-blend-multiply z-20"
              src="/gallery/filter1.png"
              alt="img"
            />
            <motion.img
              className="z-10 object-cover object-center absolute tw:object-cover mh:object-fill w-full mobile:object-cover h-full mainImage"
              // src={custom_data[0].main_img}
              src={"./gallery/Solid_black.png"}
            />
            {imageList.map((path, i) => {
              // console.log("current index",currentImageIndex)
              return (
                <motion.img
                  key={i}
                  ref={bigImg}
                  className="z-10 object-cover object-center absolute tw:object-cover mh:object-fill mobile:object-cover w-full h-full mainImage"
                  // src={custom_data[0].main_img}
                  src={path}
                  alt="image"
                  initial="hidden"
                  animate={currentImageIndex === i ? "visible" : "exit"}
                  variants={imageVariants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              );
            })}
            <Image
              height={1000}
              width={1000}
              className="absolute bottom-0 w-full bg-gradient-to-t from-[rgba(67,88,86,0.75)] from-10% to-[rgba(67,88,86,0)] h-[60%] z-30"
              src="/gallery/pattern.png"
              alt="image"
            />
          </motion.div>
          <div className="absolute bottom-[25%] left-[12%] text-[#E9F8E8] mobile:left-[4%] mobile:bottom-[15%] mh:left-[14%] tw:left-[7%] mh:bottom-[19%]">
            <div
              className={`tracking-tighter leading-none ${styles.Banger} text-4xl pl-10 mobile:text-sm tw:text-3xl mh:text-sm mobile:pl-2 mh:pl-2`}
            >
              2 Mar 2023
              {
                //put the text1 here
              }
            </div>
            <div
              className={`text-9xl tracking-tighter leading-none  ${styles.Banger} mobile:text-5xl mh:text-5xl tw:3xl`}
            >
              Motor Show
              {
                //put text2 here
              }
            </div>
            <div
              className={`tracking-tighter leading-nonel ${styles.dg_text} text-6xl mobile:text-3xl mh:text-3xl tw:text-5xl`}
            >
              The classics and the vintage, all in one garage.
              {
                //put text3 here
              }
            </div>
          </div>
          <div
            className="z-20 text-white w-full mh:top-[85%] absolute -bottom-[10%] h-[25vh] bg-red- mobile:-bottom-[30%]
          tw:h-[17vh] tw:-bottom-[15%] drop-shadow-[0_4rem_4rem_rgba(0,0,0,0.3)]"
          >
            <Swiper
              // onActiveIndexChange={detect} // for activating autoplay
              // onSlideChange={detect}
              ref={swiperRef}
              initialSlide={0}
              // onRealIndexChange={(e) =>
              //   console.log(swiperRef.current, detect(e.activeIndex))
              // } //for autoplay animation
              spaceBetween={0}
              centeredSlides={true}
              slidesPerView={wind}
              freeMode={true}
              speed={8000}
              // autoplay={{ //uncomment the code to activate the autoplay
              // delay: 1,
              // disableOnInteraction: false,
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <div className="swiper-wrappe ">
                {custom_data.map((e, i) => {
                  return (
                    <SwiperSlide
                      key={i}
                      onClick={() => cardClick(e, i)}
                      className="relative"
                    >
                      <div
                        className={`text-3xl mobile:text-xl mh:text-xs tw:text-sm mobile:tracking-wide mobile:left-1 mobile:bottom-1 mh:left-1 mh:bottom-4  tw:left-2 tw:bottom-4
                                             text-[rgba(255,255,255,1)] text-left font-semibold left-7 bottom-7 absolute z-50 text-white  ${styles.Banger} tracking-widest`}
                      >
                        <div>{`0${i + 1}`}</div>
                        <div>{e.card_name}</div>
                      </div>
                      <Image
                        height={1000}
                        width={1000}
                        className="mobile:object-cover h-full"
                        src={e.slide_img}
                        alt="Main Comic"
                      />
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Picture;
