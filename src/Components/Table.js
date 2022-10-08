import React from 'react'
import HeadTable from './HeadTable'
import BodyTable from './BodyTable'
import "../Table.css"
function Table() {
  return (
    <table style={{borderCollpase:"collapse",flex:1}}>
        <HeadTable/>
        <BodyTable/>
    </table>
  )
}

export default Table