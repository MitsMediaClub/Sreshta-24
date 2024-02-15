import Picture from "./picture";
function Main() {
  return (
    <>
      <div className=" border-2 border-black min-h-screen">
        <div className="px-20 border-black">
          <div className="top flex items-center justify-between">
            <div className="flex">
              <div className="img">
                <img
                  className="rounded-full w-[10rem] h-[10rem]"
                  src="./image 1.png"
                  alt="imh"
                />
              </div>
              <div className="img">
                <div className="flex justify-center items-center  rounded-full -translate-x-10 border-[0.5px] border-black bg-[rgba(0,0,0,0.3)]
                backdrop-blur-sm
                ">
                  <h1 className="capitalize h-[10rem] w-[10rem] flex justify-center items-center">
                    gallery
                  </h1>
                </div>
              </div>
            </div>
              <div className="text-[4.3vw] tracking-tighter leading-none">
                <p>More than 100</p>
                <p>events to conquer</p>
              </div>
              <div className="bg-[#375E5E] w-[25%] h-1"></div>
              <div className="h-[10vh] w-[10%] relative">
                <img className="" src="./Group 39.png" alt="" />
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] leading-none text-[4vw]">
                02
                </div>
              </div>
          </div>
        </div>
      <Picture />   
      </div>
    </>
  );
}

export default Main;
