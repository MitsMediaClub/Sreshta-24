import Book from "../events/Book";

const TechMain = () => {
  const pages = [
    {
      content: "Motor Sports",
      date: "2 Mar 2023",
      desc: `
      The tech fest has always been a wonderful event to be through.
      It's mesmerising, traumatising and a beautiful experience to go
      through. The team behind the website has worked tirelessly to
      ensure you get access to everything you wish for. This text is
      a placeholder, for god sake do not use this. Dhanyawadh
      Instead of copy-pasting the above, I'm writing this so that
      the uniqueness of each text makes it seem like something
      serious is going on here. Most people skim over, but if you
      did read, you will understand that nothing's going on here.
      Happy to waste your time.
    `,
    },
    {
      bg: "/comic.png",
    },
    {
      content: "Motor Sport",
      date: "2 Mar 2024",
      desc: `
      The tech fest has always been a wonderful event to be through.
      It's mesmerising, traumatising and a beautiful experience to go
      through. The team behind the website has worked tirelessly to
      ensure you get access to everything you wish for. This text is
      a placeholder, for god sake do not use this. Dhanyawadh
      Instead of copy-pasting the above, I'm writing this so that
      the uniqueness of each text makes it seem like something
      serious is going on here. Most people skim over, but if you
      did read, you will understand that nothing's going on here.
      Happy to waste your time.
    `,
    },
    {
      bg: "/comic.png",
    },
  ];
  return (
    <div className="min-h-screen bg-tech-bg flex justify-center items-center">
      <Book width={500} height={700} portrait={false} pages={pages} />
    </div>
  );
};

export default TechMain;
