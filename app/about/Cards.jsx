export default function Cards( { data } ){

    return (
        <div className="w-full flex flex-wrap justify-center mt-5">
          {data.map((value, index) => (
            <a key={index} href={value.link} className="">
              <div className="relative group rounded-xl bg-no-repeat bg-cover bg-center w-[300px] h-[300px] md:w-[350px] md:h-[350px] p-4 flex flex-col justify-end hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer">
                <img
                  src={value.img}
                  className="absolute pb-4 top-0 h-full"
                />
                <div className="px-5 py-3">
                <h1 className="font-bold text-xl psans text-white whitespace-nowrap relative z-30">
                  {value.name}
                </h1>
                <h1 className="font-light text-md psans text-white whitespace-nowrap relative z-30">
                  {value.role}
                </h1>
                </div>
              </div>
            </a>
          ))}
        </div>
      )
}