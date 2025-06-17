// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/app/components/Navbar"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("Hey I am harry")
  let a = fs.readFile("README.md")
  a.then(e=>{console.log(e.toString())})
  return (
   <div>
    
    I am a Homepage 
    {/* {count} */}
    {/* <button onClick={()=> setCount(count + 1)}>Click me</button> */}
   </div>
  );
}