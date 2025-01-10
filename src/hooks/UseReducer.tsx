import React, { useEffect, useReducer, useRef } from 'react'
import UseState from './UseState'

interface CountType {
  count: number,
  userInput: string,
  renderCount: number
}

interface PayloadType {
  count: number,
  userInput: string
}

interface ActionType {
  type: string,
  payload?: string
}

const UseReducer = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  function reducer(state: CountType, action: ActionType): CountType {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 }
      case 'decrement':
        if (state.count === 0) return state;
        return { ...state, count: state.count - 1 }
      case 'user-input':
        return { ...state, userInput: action.payload || '', renderCount: state.renderCount + 1 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', renderCount: 0 })

  useEffect(() => {
    inputRef.current?.focus();
  }, [])


  return (
    <div>
      <div className='flex items-center justify-center flex-row gap-4 bg-black py-5'>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
      <div className='flex items-center focus:outline-none px-3 h-10'>
        <input ref={inputRef} className='border-2 border-red-400 focus:outline-none px-3 h-10' type='text' value={state.userInput} onChange={(event) => dispatch({ type: 'user-input', payload: event?.target?.value })}></input>
      </div>
      <p>Count: {state.count}</p>
      <p>Render: {state.renderCount}</p>

    </div >
  )
}

export default UseReducer