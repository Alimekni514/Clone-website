import React from 'react'
import NewsCard from './NewsCard'
import Weather from './Weather'

function FirstSection() {
  return (
    <div className='container FirstSection' style={{display:"flex",justifyContent:"flex-start",gap:"50px",marginTop: "20px"}}>
        <NewsCard  title="Absolutely astonishing breaking news!"
        description="Organic raw denim Vice keffiyeh lomo Kickstarter art lomo Kickstarter art four loko. Organic raw denim Vice keffiyeh lomo Kickstarter art lomo Kickstarter art four loko."
        bgImage="https://i.postimg.cc/dtW10PtT/dog-resizedimagehead.jpg"/>
        <Weather/>
    </div>
  )
}

export default FirstSection