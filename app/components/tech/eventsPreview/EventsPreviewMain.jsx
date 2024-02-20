const EventsPreviewMain = () => {
  return (
    <div className="pt-12">
        <img src="/eventsheader.png" alt="events" className="w-52" />
        <h1 className="text-xl">More than 100 <br/>events to conquer </h1>
        <hr className="w-1/3 h-1 bg-tech-primary"/>
        <img src="/headernum1.png" alt="load" className="w-32" />      
      </div>
     
      <div className="w-full overflow-x-auto flex items-center mt-8">
        <img src="/eventn1.png" alt="Event 1" className="w-[32rem] mr-4" />
        <img src="/eventn1.png" alt="Event 2" className="w-[32rem] mr-4" />
        <img src="/eventn1.png" alt="Event 1" className="w-[32rem] mr-4" />
      </div>
    </div>    


  );
};





export default EventsPreviewMain;
