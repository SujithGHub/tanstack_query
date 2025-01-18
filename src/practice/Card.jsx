import React from 'react'

const Card = ({ item }) => {
  return (
    <div style={{ width: '100px', flexGrow: 1, height: '100px', border: '2px solid red', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item}</div>
  )
}

export default Card