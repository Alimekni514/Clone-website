import React from 'react'
import New from './New'
function TopNews() {
  return (
    <div style={{width:"400px"}}>
        <h3 style={{borderBottom:"1px solid #ececec",padding:"10px",display:"flex",justifyContent:"space-between",fontWeight:"400",color:"#666",fontSize:"23px"}}>Top news<span style={{fontWeight:"300",fontSize:" 16px"}}>+more</span></h3>
   <New title="Gastropub distillery Marfa farm-to-table, Etsy Truffaut fingerstache."/>
    <New title="Squid lomo Kickstarter art lomo Kickstarter art party cronut scenester."/>
    <New title="Organic raw denim lomo Kickstarter art Vice keffiyeh four loko."/>
    < New title="Organic raw denim Vice keffiyeh lomo Kickstarter art lomo Kickstarter art four loko."/>
    </div>
  )
}

export default TopNews