import React from 'react'
import "../Table.css"
function HeadTable() {
  return (
    <React.Fragment>
        <thead>
            <tr>
                <th>date</th>
                <th>location</th>
                <th>team</th>
                <th colSpan="2">score</th>
                <th>team</th>
            </tr>
        </thead>
    </React.Fragment>
  )
}

export default HeadTable