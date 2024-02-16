import FloatButton from "./FloatButton";
import { Landing } from "./landing/Landing";
import LandingMobile from "./landing/LandingMobile";

const TechMain = () => {
  return (
    <>
      <div className=" lg:block md:block  hidden bg-tech-bg">
        <Landing />
      </div>
      <div className=" bg-tech-bg">
        <LandingMobile />
      </div>
    </>
  );
};

export default TechMain;
