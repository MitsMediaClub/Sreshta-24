import FloatButton from "./FloatButton";
import EventsPreviewMain from "./eventsPreview/EventsPreviewMain";
import { Landing } from "./landing/Landing";

const TechMain = () => {
  return (
    <div className="min-h-screen bg-tech-bg">
      <Landing />
      <EventsPreviewMain />
    </div>
  );
};

export default TechMain;
