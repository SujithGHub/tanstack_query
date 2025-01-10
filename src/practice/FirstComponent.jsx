import React from 'react'
import Card from './Card'

const FirstComponent = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', cursor: 'pointer', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      {new Array(100).fill(0).map((_, index) => <Card key={index} item={index + 1} />)}
    </div>
  )
}

export default FirstComponent