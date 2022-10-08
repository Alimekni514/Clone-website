import React from 'react'

function NewL({title,description,bgimg}) {
  return (
    <div style={{display:"flex",alignItems:"flex-start",gap:"6px"}}>
        <img src={bgimg} alt='woman' style={{width:"150px",height:"120px"}}/>
        <div>
            <h3 style={{fontSize:"18px",margin:"10px 5px ",color:"grey",fontWeight:"600"}}>{title}</h3>
            <p style={{lineHeight:"1.2",margin:"5px ",color:"#000",lineHeight:"1.4"}}>{description}</p>
        </div>
    </div>
  )
}

export default NewL