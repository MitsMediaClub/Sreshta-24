import Image from "next/image";
import React from "react";

const LandingVarnam = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          src={"/varnam/landing/landingBg.webp"}
          width={2000}
          height={2000}
          alt="Varnam Landing Page"
          className="w-full h-screen object-cover LPICON border-8"
        />
        <Image
          src={"/varnam/landing/title.png"}
          width={1000}
          height={1000}
          alt="Varnam Landing Page Title"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={"/varnam/landing/downArrow.png"}
          width={1000}
          height={1000}
          alt="Varnam Landing Page Arrow"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 "
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
