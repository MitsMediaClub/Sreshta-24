import { Landing } from "./landing/Landing";
import LandingMobile from "./landing/LandingMobile";
import Main from "./gallery/Main";
const TechMain = () => {
  return (
    <div>
      <div className="md:block hidden bg-tech-bg">
        <Landing />
      </div>
      <div className=" bg-tech-bg md:hidden">
        <LandingMobile />
      </div>
      <Main />
    </div>
  );
};

export default TechMain;
