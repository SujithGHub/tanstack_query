import React, { memo, useEffect, useLayoutEffect, useState } from 'react';


const UseState: React.FC<any> = () => {

  const [useEffectValue, setUseEffectValue] = useState(0);
  const [useLayoutEffectValue, setUseLayoutEffectValue] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setUseEffectValue(prev => prev + 1)
    // The UI rendering wont be delayed, UI will be rendered at first, then the effects inside will run so that it will render 
    // again to update the UI.
  }, [])

  useLayoutEffect(() => {
    // setTimeout(() => new Promise((resolve, reject) => {
    //   resolve(setUseLayoutEffectValue(useLayoutEffectValue + 1))
    // }), 2000)

    // The UI rendering is delayed until useLayoutEffect finishes running, so the user directly sees the updated values.
    setUseLayoutEffectValue(prev => prev + 1)
  }, [])

  useEffect(() => {
    console.log("Inside UseEffect!")
  }, []);

  const handleClick = () => {
    // setUseEffectValue(prev => prev + 1)
    // setUseEffectValue(prev => prev + 1)
    // setUseEffectValue(prev => prev + 1)

    setUseEffectValue(useEffectValue + 1)
    setUseEffectValue(useEffectValue + 1)
    setUseEffectValue(useEffectValue + 1)
  }


  return (
    <div>
      <p>1. State causes the UI to render without the loss of its value <br />
        variable loses value if render happens. <br />

        2. State changes are noted in the virtual DOM and it will be performance efficient while rendering UI. <br />
        This logic cannot be done using variables <br />

        3. State updates the DOM node while re-rendering to reflect the changes in the UI. <br />
        4. Batch re-render - All the state updates happens in a single render.
        So the performance will be improved.
      </p>
      <p>Value: {useEffectValue}</p>
      <p>Value: {useLayoutEffectValue}</p>

      <p>Count: {count}</p>

      <button className='button-normal' onClick={handleClick}>Add Value</button>
      UseState</div>
  )
}

export default memo(UseState);