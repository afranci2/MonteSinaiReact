import React, { useState, useEffect } from "react";

const Iglesias = () => {
  const [data, setData] = useState("nothing yet");
  const [data2, setData2] = useState("nothing yet");

  useEffect(() => {
    retrieveData2();
  }, []);


  async function retrieveData2() {
    const res = await fetch("http://localhost:8000/iglesias/pawtucket");
    const data = await res.json();
    const stringedData = JSON.stringify(data);
    const parsedData = JSON.parse(stringedData);
    const churchInfo2 = parsedData["location"];
    setData2(churchInfo2)
  }

  async function retrieveData() {
    const res = await fetch("http://localhost:8000/iglesias/pawtucket");
    const data = await res.json();
    const stringedData = JSON.stringify(data);
    const parsedData = JSON.parse(stringedData);
    const churchInfo = parsedData["name"];
    setData(churchInfo);
  }

  return (
    <div className="text-black">
      <p>Iglesias</p>
      <button onClick={retrieveData}>Hey</button>
      <p>{data}</p>
      <p> {data2} </p>
    </div>
  );
};

export default Iglesias;
