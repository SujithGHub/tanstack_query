import React, { useEffect, useState } from 'react';
import { data } from '../api/Chip-data';

const Chips = () => {

  const [chipData, setChipData] = useState(null);

  useEffect(function onMount() {
    setChipData(shuffleArray(data))
  }, [])


  function shuffleArray(chipData) {
    const flatArr = Object.entries(chipData).flat();
    for (let i = flatArr.length - 1; i > 0; i--) {
      // this will give a random index in between the current i and the 0
      // if the current index is 5, then it will give an index between 0 and 4.99999 so, 
      // the random index wont exceed the current index
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [flatArr[i], flatArr[randomIndex]] = [flatArr[randomIndex], flatArr[i]]
    }
    return flatArr;
  }

  return (
    <div className='flex flex-wrap gap-6'>
      {chipData?.map((chip, index) =>
        <div key={chip + index} className='bg-[#cfd7c9] text-black p-3 border rounded-xl cursor-pointer active:scale-50 transition-transform duration-1000'>{chip}</div>
      )}
    </div>
  )
}

export default Chips;