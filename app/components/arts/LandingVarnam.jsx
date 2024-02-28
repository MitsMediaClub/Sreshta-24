import Image from "next/image";
import React from "react";
import LandingNavbar from "./LandingNavbar";

const LandingVarnam = () => {
  return (
    <div className="w-full">
      <div className="relative md:m-8">
        <div className="absolute top-0 w-full z-20 hidden md:block ">
          <LandingNavbar />
        </div>
        <Image
          src={"/varnam/landing/landingBg.webp"}
          width={2000}
          height={2000}
          alt="Varnam Landing Page"
          className="w-full h-screen object-cover  hidden lg:block"
        />
        <Image
          src={"/varnam/landing/landingBgMobile.webp"}
          width={2000}
          height={2000}
          alt="Varnam Landing Page"
          className="w-full h-screen object-cover  lg:hidden"
        />
        <Image
          src={"/varnam/landing/title.png"}
          width={1000}
          height={1000}
          alt="Varnam Landing Page Title"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        />
        <Image
          src={"/varnam/landing/titleMobile.png"}
          width={400}
          height={400}
          alt="Varnam Landing Page Title"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:hidden"
        />
        <Image
          src={"/varnam/landing/downArrow.png"}
          width={1000}
          height={1000}
          alt="Varnam Landing Page Arrow"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-20 lg:w-40 "
        />
      </div>
    </div>
  );
};

LandingVarnam.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default LandingVarnam;
