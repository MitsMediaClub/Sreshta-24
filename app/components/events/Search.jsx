import Image from "next/image";

const Search = ({ search, changeSearch }) => {
  return (
    <div className="flex gap-5 border-b-2 border-tech-primary pb-4 w-full md:w-1/3">
      <Image
        width={30}
        height={30}
        src="/events/search.svg"
        alt="Search"
        className=""
      />
      <input
        type="text"
        placeholder="Search for events"
        value={search}
        onChange={(e) => changeSearch(e.target.value)}
        className="bg-transparent border-none text-tech-primary text-3xl focus:outline-none w-full dog"
      />
    </div>
  );
};

export default Search;
