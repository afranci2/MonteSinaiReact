import React, {useState} from "react";

const Iglesias = () => {
  const [data, setData] = useState("nothing yet")

  async function retrieveData() {
    const res = await fetch("http://localhost:8000/iglesias/pawtucket");
    const data = await res.json();
    const stringedData = await JSON.stringify(data)
    const parsedData = JSON.parse(stringedData)
    const churchInfo = parsedData[0].LocationAndDescription.Pawtucket
    console.log(parsedData[0].LocationAndDescription);
    setData(churchInfo)
  }

  return (
    <div className="text-black">
      <p>Iglesias</p>
      <button onClick={retrieveData}>Hey</button>
      <p>{data}</p>
    </div>
  );
};

export default Iglesias;
