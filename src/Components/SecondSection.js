import React from 'react'
import Table from './Table'
import TopNews from './TopNews'
function SecondSection() {
  return (
    <div className='container SecondSection' style={{marginTop:"10px",display:"flex"}}>
        <TopNews></TopNews>
        <Table/>
    </div>
  )
}

export default SecondSection