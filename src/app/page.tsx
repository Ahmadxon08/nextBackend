import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Link href={"/table"}>
        {" "}
        <button className="flex mx-auto bg-slate-800 text-white p-4 justify-center items-center">
          CLik me
        </button>
      </Link>
    </div>
  );
};

export default Home;
