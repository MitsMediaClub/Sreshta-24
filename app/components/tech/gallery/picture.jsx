'use client'
import { gsap } from "gsap";
import { useRef,useLayoutEffect,useState, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import backgroundImage from '../../../../public/gallery/border.png'
import 'swiper/css';
import './styles.css'

import { Autoplay, Pagination, Navigation,EffectFade } from 'swiper/modules';

function Picture() {

    const [ManinData, setManinData] = useState("")

    let custom_data = [
        {
            "slide_img":"/gallery/s1.png",
            'main_img':"/gallery/m1.png",
            'card_name':"Motor show",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"/gallery/pexels-molnár-tamás-photography™-16061900 2.png",
            'main_img':"/gallery/m2.png",
            'card_name':"bharati nattitam",
            "text":["text1","text1","text1"],
        },
        {
            "slide_img":"/gallery/s3.png",
            'main_img':"/gallery/m3.png",
            'card_name':"mind games",
            "text":["text1","text1","text1"],
        },
        
    ]

    const container = useRef(null)
    const bigImg = useRef(null)
    const maincontainer = useRef(null)
    const swiperRef = useRef(null);


    useEffect(()=>{
        if(swiperRef.current.swiper){
            console.log("swiper init")
        }
    })

    const detect = (e)=>{
        // console.log("slide changed",Swiper.activeIndex)
        if(undefined!=custom_data[e]){
            console.log("slide changed",e)
            console.log(custom_data[e].slide_img)
            bigImg.current.src = custom_data[e].main_img
        }
    }

    const cardClick = (e,i)=>{
        console.log("card clicked",e,i)
        // setManinData(e)
        // bigImg.current.src = e.slide_imgs
        // console.log('index',swiperRef.current.activeIndex = 1)
        swiperRef.current.swiper.slideTo(i,400,false)
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
        <div  ref={maincontainer} className="h-[110vh] mh:pt-8 mobile:h-[80vh] w-full overflow-hidden peat-round pt-20 relative flex justify-center">
            <div className="relative h-[94vh] w-full flex justify-center bg-red- mobile:h-[60vh] ip:bg-orange
            mh:h-[97vh] mobile:bg-green-">
                <div className="vertical absolute z-40 gap-0 justify-between w-[5%] h-3/6 flex items-center flex-col bg-green- top-[25%] right-5
                mobile:opacity-0 mh:opacity-0 tw:opacity-0
                ">
                    <div className="py-4 text-4xl font-mono">01</div>
                        <div className="bg-[rgba(17,22,21,0.5)] grow p-[0.1rem] hover:p-[0.2rem] hover:bg-black"></div>
                        <div className="bg-[rgba(17,22,21,0.5)] grow p-[0.1rem] hover:p-[0.2rem] hover:bg-black"></div>
                        <div className="bg-[rgba(17,22,21,0.5)] grow p-[0.1rem] hover:p-[0.2rem] hover:bg-black"></div>
                        <div className="bg-[rgba(17,22,21,0.5)] grow p-[0.1rem] hover:p-[0.2rem] hover:bg-black"></div>
                        <div className="bg-[rgba(17,22,21,0.5)] grow p-[0.1rem] hover:p-[0.2rem] hover:bg-black"></div>
                    <div className="py-4 text-4xl font-mono">05</div>
                    </div>
                    <div className="p-2 bg-cover h-[100%] w-[85%] mobile:w-[97%] mh:w-[75%] tw:w-[90%] mobile:p-1 -z-0" style={{
                        backgroundImage:`url(${backgroundImage.src})`
                    }}>
                        <div className=" bg-contain bg-no-repeat bg-center relative h-[100%] flex justify-center ">

                            {/* <img className="absolute mix-blend-multiply opacity-30 top-0 w-[85%] h-[90vh]" src="./pexels-jeremy-alford-13172446 2.png" alt="" /> */}
                            {/* <img className="absolute object-cover top-0 w-[100%] h-[100%] z-10" src="./border.png" alt="image" /> */}
                            <Image height={1000} width={1000} className="absolute top-0 w-[100%] h-[100%] object-cover mix-blend-multiply z-20" src="/670 1.png" alt="img" />
                            <img ref={bigImg} className="transition-all z-10 object-cover tw:object-cover mh:object-cover mobile:object-fill top-0 w-[100%] h-[100%] mainImage" src={custom_data[0].main_img} alt="" />
                            <Image height={1000} width={1000} className="absolute object-cover bottom-0 w-[100%] bg-gradient-to-t from-[rgba(67,88,86,0.75)] from-10% to-[rgba(67,88,86,0)] h-[60%] z-30" src="/gallery/Vector.png" alt="image" />
                        </div>
                    </div>
                <div className="absolute bottom-[25%] left-[12%] text-[#E9F8E8] mobile:left-[4%] mobile:bottom-[15%] mh:left-[14%] mh:bottom-[19%]">
                    <div className="font-['kivi']  tracking-tighter leading-none Banger text-4xl pl-10 mobile:text-sm mh:text-sm mobile:pl-2 mh:pl-2">2 Mar 2023</div>
                    <div className="text-9xl tracking-tighter leading-none Banger mobile:text-5xl mh:text-5xl">Motor Show</div>
                    <div className="tracking-tighter leading-nonel dg-text text-6xl mobile:text-3xl mh:text-3xl">The classics and the vintage, all in one garage.</div>
                </div>
            <div className="z-20 text-white w-full absolute -bottom-[10%] h-[25vh] mobile:h-[14vh] drop-shadow-[0_4rem_4rem_rgba(0,0,0,0.3)]">
                <Swiper
                // onActiveIndexChange={detect}
                    // onSlideChange={detect}
                    ref={swiperRef}
                    initialSlide={0}
                    onRealIndexChange={e=>console.log(swiperRef.current,detect(e.activeIndex))}
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={5}
                    freeMode={true}
                    speed={8000}
                    // autoplay={{
                    // delay: 1,
                    // disableOnInteraction: false,
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className="swiper-wrapper">
                        {
                            custom_data.map((e,i)=>{
                                return (
                                        <SwiperSlide key={i} onClick={()=>cardClick(e,i)} className="relative">
                                            <div className="text-3xl mobile:text-xs mh:text-xs mobile:tracking-tighter mobile:left-1 mobile:bottom-1 mh:left-1 mh:bottom-4
                                             text-[rgba(255,255,255,1)] text-left font-semibold left-7 bottom-7 absolute z-50 text-white Banger tracking-widest">
                                                <div>
                                                    {`0${i+1}`}
                                                </div>
                                                <div>
                                                    {e.card_name}
                                                </div>
                                            </div>
                                            <Image height={1000} width={1000} className="mobile:object-contain" src={e.slide_img} alt="" />
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