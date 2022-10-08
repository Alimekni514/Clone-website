import React from 'react'
import "../Table.css"
function GreenRow({date,location,team,score1,score2,secondteam}) {
     return   parseInt(score1) >parseInt(score2)?(
          <tr >
          <td className='GreenRow'>{date}</td>
          <td className='GreenRow'>{location}</td>
          <td className='GreenRow winner'>{team}</td>
          <td className='GreenRow winner'>{score1}</td>
          <td className='GreenRow'>{score2}</td>
          <td className='GreenRow'>{secondteam}</td>
      </tr>
        ):(
          <tr >
          <td className='GreenRow'>{date}</td>
          <td className='GreenRow'>{location}</td>
          <td className='GreenRow'>{team}</td>
          <td className='GreenRow'>{score1}</td>
          <td className='GreenRow winner'>{score2}</td>
          <td className='GreenRow winner'>{secondteam}</td>
      </tr>
        )
}

export default GreenRow