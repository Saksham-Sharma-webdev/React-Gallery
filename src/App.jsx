import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card.jsx";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  async function getData() {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setUserData(res.data);
  }

  useEffect(function () {
    getData()
  },[index])

  let printUserData = <h3 className="flex justify-center items-center font-bold text-xl">Loading...</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((element, idx) => {
      return(
        <Card element={element} idx={idx} />
      );
    });
  }

  return (
    <div className="bg-black  h-screen text-white flex flex-col pb-4 scrollbar-none">
      <div className="bg-slate-900 px-4 py-3 font-bold text-2xl">My Gallery</div>
      <div className="flex justify-center flex-wrap gap-5 pt-6 pb-6 overflow-auto flex-1 scrollbar-none">
        {printUserData}
      </div>
      <div className="w-full flex justify-center items-center gap-8 pt-3">
        <button style={{opacity: index === 1 ? 0.5 : 1}} onClick={()=>{
          if(index>1){
            setUserData([])
            setIndex(index-1)
            console.log("back Clicked")
          }
        }} className="rounded-xl bg-slate-900 px-5 py-2 font-bold text-xl cursor-pointer">&lt;</button>
        <h4 className="font-bold">Page {index}</h4>
        <button onClick={()=>{
          setUserData([])
          setIndex(index+1)
          console.log("Next clicked")
        }} className="rounded-xl bg-slate-900 px-5 py-2 font-bold text-xl cursor-pointer">&gt;</button>
      </div>
    </div>
  );
};

export default App;