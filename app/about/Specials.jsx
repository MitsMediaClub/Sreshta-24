import Image from "next/image"
export default function Specials( { data } ){

    return (
        <>
        <div className="w-full flex items-center">
          {data.map((value, index) => (
            <><a key={index} href={value.link} className="dog h-max text-3xl p-4">
                 <span className="text-7xl leading-0 h-max pr-5">
                {value.divider}
              </span>
              {value.name}
              </a>
              
              </>
          ))}
        </div>
        </>
      )
}