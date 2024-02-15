'use client'
import { gsap } from "gsap";
import { useRef,useLayoutEffect,useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './styles.css'

import { Autoplay, Pagination, Navigation,EffectFade } from 'swiper/modules';

function Picture() {

    const [ManinData, setManinData] = useState("")

    let custom_data = [
        {
            "slide_img":"./pexels-jeremy-alford-13172446 1.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 2.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 3.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-jeremy-alford-13172446 1.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 2.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 2.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-jeremy-alford-13172446 1.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 3.png",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"./pexels-molnár-tamás-photography™-16061900 3.png",
            "text":["text1","text1","text1"],
        },
        
    ]

    const container = useRef(null)
    const bigImg = useRef(null)
    const maincontainer = useRef(null)
    const swiperRef = useRef(null);

    const detect = (e)=>{
        // console.log("slide changed",Swiper.activeIndex)
        console.log("slide changed",e)
        bigImg.current.src = custom_data[e].slide_img
    }

    const cardClick = (e)=>{
        console.log("card clicked",e)
        // setManinData(e)
        bigImg.current.src = e.slide_img
        // console.log('index',swiperRef.current.activeIndex = 1)
    }


    // gsap.registerPlugin(ScrollTrigger) 
    // useLayoutEffect(()=>{
    //     //animatoins
    //     let scrollTween = gsap.to(container.current, {
    //         // xPercent: -100,
    //         // x: () => window.innerWidth,
    //         ease: "none", // <-- IMPORTANT!
    //         scrollTrigger: {    
    //           trigger: maincontainer.current,
    //           start: "top top",
    //         //   end: () => `+=${container.current.offsetWidth} bottom`,
    //           scrub: 1,
    //           markers: true,
    //           onEnter:()=>{
    //             console.log("triggered");
    //             slidAnimation();
    //           }
    //         }
    //     });

    //     const slidAnimation = ()=>{

            
    //         // const tl = gsap.timeline({
    //         //     scrollTrigger: {
    //         //         trigger: container.current,
    //         //         start: "50% 70%",
    //         //         end: "50% 20%",
    //         //         scrub: 1,
    //         //         containerAnimation: scrollTween,
    //         //         markers: true
    //         //     },
    //         // });
    
    //         gsap.to(container.current,{
    //             // x:"-250%",
    //             duration:5,
    //             repeat:-1,
    //             delay:0,
    //             ease:'linear',
    //             // scrollTrigger: {
    //             //     trigger: container.current,
    //             //     start: "50% 70%",
    //             //     end: "50% 20%",
    //             //     scrub: 1,
    //             //     containerAnimation: scrollTween,
    //             //     markers: true
    //             // },
    //         },)
    //     }

    // },[])



    return ( 
        <>
        <div  ref={maincontainer} className="h-[110vh] overflow-hidden peat-round pt-20 relative flex justify-center">
            <div className="relative h-[90vh] w-[90%] flex justify-center">

                <img className="absolute -top-28 left-0 z-10" src="./19.png" alt="" />
                <img className="absolute -bottom-28 right-0 z-10" src="./19.png" alt="" />
                <img className="absolute mix-blend-multiply opacity-50 top-0 w-[85%] h-[90vh]" src="./670 1.png" alt="img" />
                <img className="absolute mix-blend-multiply opacity-30 top-0 w-[85%] h-[90vh]" src="./pexels-jeremy-alford-13172446 2.png" alt="" />
                <img ref={bigImg} className="absolute transition-all mix-blend-multiply top-0 w-[85%] h-[92vh] mainImage" src={custom_data[0].slide_img} alt="" />
                <div className="absolute bottom-32 left-40 text-white">
                    <div className="font-['kivi']  tracking-tighter leading-none pl-10">2 Mar 2023</div>
                    <div className="text-9xl tracking-tighter leading-none">Motor Show</div>
                    <div className="text-6x tracking-tighter leading-nonel pl-32">The classics and the vintage, all in one garage.</div>
                </div>
            <div className="z-20 text-white w-full absolute -bottom-8 h-[20vh]">
                {/* <div ref={container} className="flex gap-2">
                    <img className=" slider" src="./pexels-molnár-tamás-photography™-16061900 2.png" alt="" />
                    <img className=" slider" src="./pexels-molnár-tamás-photography™-16061900 2.png" alt="" />
                    <img className=" slider" src="./pexels-molnár-tamás-photography™-16061900 2.png" alt="" />
                    <img className=" slider" src="./pexels-molnár-tamás-photography™-16061900 2.png" alt="" />
                    <img className=" slider" src="./pexels-molnár-tamás-photography™-16061900 2.png" alt="" />
                    <img className=" slider" src="./pexels-molnár-tamás-photography™-16061900 2.png" alt="" />
                </div> */}
                <Swiper
                // onActiveIndexChange={detect}
                    // onSlideChange={detect}
                    initialSlide={1}
                    onRealIndexChange={e=>console.log(`index${e.activeIndex}`,detect(e.activeIndex))}
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={4}
                    // loop={true}
                    freeMode={true}
                    speed={8000}
                    autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    }}
                    // pagination={{
                    // clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className="swiper-wrapper">
                    <SwiperSlide onClick={()=>cardClick(e)}>
                        <div></div>
                    </SwiperSlide>
                    <SwiperSlide onClick={()=>cardClick(e)}>
                        <div></div>
                    </SwiperSlide>
                        {
                            custom_data.map((e,i)=>{
                                return (
                                        <SwiperSlide key={i} onClick={()=>cardClick(e)}>
                                            <img src={e.slide_img} alt="" />
                                        </SwiperSlide>
                                    )
                                })
                            }
                    </div>
                </Swiper>
            </div>
            </div>
        </div>
        </>
     );
}

export default Picture;