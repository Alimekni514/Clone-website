import React from 'react'
import "../Table.css"
function WhiteRow({date,location,team,score1,score2,secondteam,property}) {
  if(parseInt(score1)> parseInt(score2)){
    return (
      <tr>
          <td >{date}</td>
          <td>{location}</td>
          <td className='winner'>{team}</td>
          <td className='winner'>{score1}</td>
          <td>{score2}</td>
          <td >{secondteam}</td>
      </tr>
    )
  }else {
    return (
      <tr>
          <td >{date}</td>
          <td>{location}</td>
          <td>{team}</td>
          <td >{score1}</td>
          <td className='winner'>{score2}</td>
          <td className='winner'>{secondteam}</td>
      </tr>
    )
  }
  
}

export default WhiteRow