"use client";
import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect,useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import styles from "./styles.module.css";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

function Picture() {
  let custom_data = [
    {
      slide_img: "/gallery/Masala_cofee/img3.webp",
      main_img: [
        "/gallery/Masala_cofee/img1.webp",
        "/gallery/Masala_cofee/img2.webp",
        "/gallery/Masala_cofee/img3.webp",
        "/gallery/Masala_cofee/img4.webp",
        "/gallery/Masala_cofee/img5.webp",
        "/gallery/Masala_cofee/img6.webp",
        "/gallery/Masala_cofee/img7.webp",
        "/gallery/Masala_cofee/img8.webp",
      ],
      card_name: "Masala Cofee",
      text: ["text1", "Masala Cofee", "Indulged in an unforgettable musical journey with the renowned band Masala Coffee at our electrifying concert!"],
    },
    {
      slide_img: "/gallery/Nexus_gaming/img1.webp",
      main_img: [
        "/gallery/Nexus_gaming/img1.webp",
        "/gallery/Nexus_gaming/img2.webp",
        "/gallery/Nexus_gaming/img3.webp",
        "/gallery/Nexus_gaming/img4.webp",
      ],
      //without ./ there is a 404 error while switching the slide
      card_name: "Nexus gaming",
      text: ["text1", "Nexus gaming", "Where gaming dreams come to life in an electrifying battle of pixels and strategy!"],
    },
    {
      slide_img: "/gallery/Sunburn/img1.webp",
      main_img: [
        "/gallery/Sunburn/img1.webp",
        "/gallery/Sunburn/img2.webp",
        "/gallery/Sunburn/img3.webp",
        "/gallery/Sunburn/img4.webp",
        "/gallery/Sunburn/img5.webp",
        "/gallery/Sunburn/img6.webp",
      ],
      card_name: "Sunburn",
      text: ["text1", "Sunburn", "text1"],
    },
    {
      slide_img: "/gallery/Hackathon/img1.webp",
      main_img: [
        "/gallery/Hackathon/img1.webp",
        "/gallery/Hackathon/img2.webp",
        "/gallery/Hackathon/img3.webp",
      ],
      card_name: "Hackathon",
      text: ["text1", "Hackathon", "text1"],
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
  const [content, setcontent] = useState(custom_data[0].text)

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



  useEffect(() => {
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
  }, [imageList]);

  const textDiv = useRef()

  useLayoutEffect(() => {
    gsap.fromTo(textDiv.current,{
      x:200,
      opacity:0,
      ease:"none",
    },
    {
      x:0,
      opacity:1,
      ease:"none",
    })
  }, [content])

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
    setcontent(custom_data[i].text)
  };

  return (
    <>
      <div
        ref={maincontainer}
        className="h-[120vh] mobile:pt-4 mh:pt-4 mobile:h-[80vh] w-full overflow-hidden peat-round pt-14 relative flex justify-center"
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
            <div className="h-full w-full LPICON2 border-[0.5rem] mobile:border-[0.3rem] absolute z-50"></div>
            <Image
              height={1000}
              width={1000}
              className="absolute top-0 w-[100%] h-[100%] object-cover mix-blend-multiply z-20"
              src="/gallery/filters/filter1.webp"
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
              src="/gallery/filters/pattern.webp"
              alt="image"
            />
          </motion.div>
          <div ref={textDiv} className="absolute bottom-[20%] left-[12%] text-[#E9F8E8] mobile:left-[4%] mobile:bottom-[15%] mh:left-[14%] tw:left-[7%] mh:bottom-[19%]">
            <div
              className={`tracking-tighter leading-none ${styles.Banger} text-4xl pl-10 mobile:text-sm tw:text-3xl mh:text-sm mobile:pl-2 mh:pl-2`}
            >
              2 Mar 2023
              {
                //put the text1 here
              }
            </div>
            <div
              className={`text-9xl tracking-tight leading-none  ${styles.Banger} mobile:text-5xl mh:text-5xl tw:3xl`}
            >
              {
              //Motor Show
                //put text2 here
                content[1]
              }
            </div>
            <div
              className={`tracking-tighter leading-none ${styles.dg_text} w-3/4 text-6xl mobile:text-3xl mh:text-3xl tw:text-5xl`}
            >
              {
                //put text3 here
                content[2]
              }
            </div>
          </div>
          <div
            className="z-20 text-white w-full mh:top-[85%] absolute -bottom-[10%] h-[24vh] bg-red- mobile:-bottom-[30%]
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
                      <div className="h-full w-full LPICON3 mobile:border-t-[0.4rem] mobile:border-b-[0.4rem] border-t-[0.6rem] border-b-[0.6rem] border-[0.4rem] mobile:border-[0.2rem] absolute z-50"></div>
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
