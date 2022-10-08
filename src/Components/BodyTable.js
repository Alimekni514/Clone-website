import React from 'react'
import GreenRow from './GreenRow'
import WhiteRow from './WhiteRow'

function BodyTable() {
  return (
    <tbody>
        <WhiteRow date="Friday" location="Brighton" team="Bears" score1="95 "score2="109" secondteam="clubs"/>
        <GreenRow date="Friday" location="Worthington" team="Otters" score1="3"score2="1" secondteam="clubs"/>
        <WhiteRow date="Saturday" location="Littlehampton" team="Wolves" score1="7"score2="0" secondteam="Panthers"/>
        <GreenRow date="Sunday" location="Portslade" team="Hawks" score1="11"score2="12" secondteam="Capons"/>
        <WhiteRow date="Sunday" location="Hove" team="Stags" score1="6"score2="2" secondteam="Foxes"/>
    </tbody>
  )
}

export default BodyTable