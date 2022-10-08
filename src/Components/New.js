import React from 'react'

function New({title}) {
  return (
    <li style={{display:"block",padding:"8px 3px",borderBottom:"1px solid #ececec"}}><a style={{textDecoration:"none",color:"#777"}} href='#'>{title}</a></li>
  )
}

export default New