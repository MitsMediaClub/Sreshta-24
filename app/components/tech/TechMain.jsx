

// @no-compile
// @use client
import Link from "next/link" 
import Faq from "./faq/Faq"

const TechMain = () => {
  return (
    <div className="min-h-screen bg-tech-bg">
      <h2>Tech</h2>
      <Link href="/faq">
        <Faq/>
      </Link>
    </div>
  );
};

export default TechMain;
