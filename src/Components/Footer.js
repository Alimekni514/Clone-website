import React from 'react'

function Footer() {
  return (
    <div className='container' style={{borderTop:"1px solid #ececec",display:"flex",justifyContent:"center"}}>
        <a href='http://www.google.com' style={{textDecoration:"none",color:"grey",padding:"10px 15px"}}>Contact Us</a>
        <a href="http://www.google.com" style={{textDecoration:"none",color:"grey",padding:"10px 15px"}}>Follow us on Twitter</a>
        <a href="http://www.google.com" style={{textDecoration:"none",color:"grey",padding:"10px 15px"}}>RSS</a>
    </div>
  )
}

export default Footer