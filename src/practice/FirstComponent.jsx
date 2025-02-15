import React, { useState } from 'react';

const FirstComponent = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [item, setitem] = useState(null);

  const data = [
    { isFirst: true, name: 'First' },
    { isSecond: true, name: 'Second' },
    { isThird: true, name: 'Third' }
  ]

  const radioButton = [
    {
      label: 'Name',
      value: item.isFirst || item.isSecond || item.isThird,
      options: data.map(value => ({
        option: "First", value: value, 
      }))
    },
    
  ]
  return (
    // <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', cursor: 'pointer', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
    //   {new Array(100).fill(0).map((_, index) => <Card key={index} item={index + 1} />)}
    // </div>
    // <Products />
    <input type='radio' />
  )
}

export default FirstComponent