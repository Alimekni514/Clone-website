import React from 'react'
import Day from './Day'

function Weather() {
    const DaysInfo=[{
        dayoftheweek:"Mon",
        img:"https://s17.postimg.cc/jtyzfxfmn/sunny.png",
        temp:"13 °C"
    },{
        dayoftheweek:"Tues",
        img:"https://s17.postimg.cc/pi5a6v1zj/cloudy.png",
        temp:"13 °C"
    }, {
        dayoftheweek:"Wed",
        img:"https://s17.postimg.cc/pi5a6v1zj/cloudy.png",
        temp:"13 °C"
    },{
        dayoftheweek:"Thu",
        img:"https://s17.postimg.cc/9jwkgri27/rain.png",
        temp:"13 °C"
    },{
        dayoftheweek:"Fri",
        img:"https://s17.postimg.cc/jtyzfxfmn/sunny.png",
        temp:"13 °C"
    }]
  return (
    <div>
        <span>Brighton,UK</span>
        <h2>Sunny</h2>
        <div style={{display:"flex",alignItems:"center"}}>
        <img class="weather__today__image" src="https://s17.postimg.cc/gad1pvkjz/weather.png" alt="icon of a partially sunny day"></img>
            <span>13</span>
            <span class="weather__today__deg">°C</span>
        </div>
        <div>
            
        </div>
        <div style={{display:"flex",justifyContent:'space-between'}}>
           {DaysInfo.map(day=><Day info={day} key={day.dayoftheweek}></Day>)}
        </div>

      
    </div>
  )
}

export default Weather