import React from "react";
import "./Newprompt.css";
import { useEffect, useRef } from 'react'
import Upload from "../upload/Upload";

const Newprompt = () => {


  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current.scrollIntoView({behavior: "smooth" });
  },[]);

  return (
    <>
    <div className="endchat" ref={endRef}></div>
    <form className="newform">
      <Upload/>
      <input id="file" type="file" multiple={false} hidden />
      <input type="text" placeholder="Ask me anything..." />
      <button>
        <img src="/arrow.png" alt="" />
      </button>
    </form>
    </>
  );
};

export default Newprompt;
