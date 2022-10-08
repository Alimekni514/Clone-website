import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import Footer from './Footer'
function LandingSection() {
  return (
    <div style={{boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",marginBottom:"10px"} } className="container">
     <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Footer/>
    </div>
  )
}

export default LandingSection