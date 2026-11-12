import React, { useEffect, useState } from 'react';
import { data } from '../api/Chip-data';

const Chips = () => {

  const [chipData, setChipData] = useState(null);
  const [selectedChips, setSelectedChips] = useState([]);

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

  const handleClick = (chip) => {
    setSelectedChips(prev => {
      if (prev.includes(chip)) {
        setChipData(prev => [...prev, chip])
        return prev.filter(it => it !== chip)
      }
      setChipData(prev => prev.filter(it => it !== chip))
      return [...prev, chip]
    });
  }

  const handleRemove = (chip) => {
    setSelectedChips(prev => prev.filter(it => it !== chip));
    setChipData(prev => ([...prev, chip]));
  }

  const handleRemoveAll = () => {
    setSelectedChips([]);
    setChipData(shuffleArray(data))
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center p-8'>
      <div className='w-full max-w-2xl space-y-8'>

        {/* Selected Chips Area */}
        <div className='min-h-[72px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4'>
          {selectedChips.length === 0 ? (
            <p className='text-white/30 text-sm text-center py-2'>Click chips below to select</p>
          ) : (
            <div className='flex flex-wrap gap-2'>
              {selectedChips.map((chip, index) => (
                <div
                  key={index}
                  className='group inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg shadow-violet-500/25 animate-[fadeIn_0.2s_ease-out]'
                >
                  <span>{chip}</span>
                  <span onClick={() => handleRemove(chip)} className='flex items-center justify-center w-5 h-5 bg-white/20 hover:bg-white/40 rounded-full text-xs cursor-pointer transition-all duration-200 hover:rotate-90'>✕</span>
                </div>
              ))}

              {selectedChips.length > 1 && <div className='group inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-fuchsia-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg shadow-violet-500/25 animate-[fadeIn_0.2s_ease-out]'>
                <span title='Clear All' onClick={() => handleRemoveAll()} className='flex items-center justify-center w-5 h-5 bg-white/20 hover:bg-white/40 rounded-full text-xs cursor-pointer transition-all duration-200 hover:rotate-90'>✕</span>
              </div>}


            </div>
          )}
        </div>

        {/* Divider */}
        <div className='flex items-center gap-4'>
          <div className='flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
          <span className='text-white/30 text-xs uppercase tracking-widest'>Choose</span>
          <div className='flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
        </div>

        {/* Available Chips */}
        <div className='flex flex-wrap justify-center gap-3'>
          {chipData?.map((chip, index) => (
            <div key={chip + index} onClick={() => handleClick(chip)} className='px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium border border-white/10 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/30 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-0.5 active:scale-95'> {chip} </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Chips;