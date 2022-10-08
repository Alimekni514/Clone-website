import React from 'react'

function Day({info}) {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <h2 style={{fontWeight:"400",fontSize:"16px"}}>{info.dayoftheweek}</h2>
        <img src={info.img} alt=" weather"/>
        <h2 style={{fontWeight:"400",fontSize:"16px"}}>{info.temp} </h2>

    </div>
  )
}

export default Day