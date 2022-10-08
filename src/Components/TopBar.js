import React from 'react'

function TopBar() {
  return (
    <div style={{display:"flex",alignItems:"center",padding:"10px 0  10px 100px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <img src='https://s17.postimg.cc/i3kjs8kxb/city.png' alt='Building' style={{width:"72px",marginRight:"20px"}}/>
        <span style={{fontSize:"42px",fontFamily:"Roboto",fontWeight:"300"}}>The Brighton Times</span>

    </div>
  )
}

export default TopBar