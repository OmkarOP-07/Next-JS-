// import { useState, useEffect } from "react";
import fs from "fs/promises";

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("Hey I am harry");
  let a = fs.readFile("README.md");
  a.then((e) => {
    console.log(e.toString());
  });
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white text-center">
      I am a Homepage
      {/* {count} */}
      {/* <button onClick={()=> setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
