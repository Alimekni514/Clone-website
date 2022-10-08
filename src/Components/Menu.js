import React from 'react'
import MenuItem from './MenuItem'
function Menu() {
  return (
    <ul
    style={{
      padding: "0px 100px",
      display: "flex",
      justifyContent:"center",
      listStyle: "none",
      gap: "40px"
    }}
  >
    <MenuItem text="news" link="http://news" />
    <MenuItem text="events" link="http://news" />
    <MenuItem text="culture" link="http://news" />
    <MenuItem text="blog" link="http://news" />
  </ul>
  )
}

export default Menu