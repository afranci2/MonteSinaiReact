import React from 'react'

const Admin = () => {
  async function retrieveData(url) {
    const res = await fetch(url);
    const data = await res.json();
    const stringedData = JSON.stringify(data);
    const parsedData = JSON.parse(stringedData);
    const finalInfo = parsedData["location"];
    setData2(churchInfo2)
  }


  return (
    <div>Admin</div>
  )
}

export default Admin