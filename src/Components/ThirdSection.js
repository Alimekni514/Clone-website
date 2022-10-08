import React from 'react'
import LatestNews from './LatestNews'
function ThirdSection() {
  return (
    <div className='container ThirdSection'>
    <h3 style={{fontWeight:400,padding:"10px",borderBottom:"1px solid #ececec"}}>Latest news</h3>
    <LatestNews/>
    </div>
  )
}

export default ThirdSection