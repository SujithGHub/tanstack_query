import React, { useState } from 'react';



const Challenge1 = () => {

  const [selectedItems, setSelectedItems] = useState([]);

  const stringList = ["apple", "banana", "cherry", "date", "elderberry"];

  const handleCheckboxChange = (item) => {
    setSelectedItems(prev => {
      const isAvailable = prev.find(str => str === item);
      return prev.map(it => it !== isAvailable ? item : it)
    })
  }

  console.log(selectedItems, "selecteditems")


  return (
    <div>
      {stringList.map(item => (
        <div>
          <input type="checkbox" name={item} id={item} value={item} onChange={() => handleCheckboxChange(item)} />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
  )
}



const Group = () => {
  return (
    <div>
      <Challenge1 />
    </div>
  )
}

export default Group