import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div>
      Err! the enter address is not valid!
      <br />
      Goto <Link to="/">Homepage</Link>
    </div>
  )
}
