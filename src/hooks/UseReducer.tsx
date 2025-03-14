import React, { act, FormEvent, useEffect, useReducer, useRef, useTransition } from 'react'
import UseState from './UseState';

interface User {
  email: string,
  password: string
}

interface CountType {
  count: number,
  userInput: string,
  renderCount: number,
  user: User
}

interface PayloadType {
  count: number,
  userInput: string
}

interface ActionType {
  type: string,
  key: string,
  payload?: any
}

function reducer(state: any, action: ActionType): CountType {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      if (state.count === 0) return state;
      return { ...state, count: state.count - 1 }
    case 'user-input':
      return { ...state, userInput: action.payload, renderCount: state.renderCount + 1 }
    case 'form-input':
      return {
        ...state, user: {
          ...state.user, [action.key]: action.payload
        }
      }
    case 'submit':
      alert(`Welcome ${state.user.email}!`)
    default:
      return state
  }
}
const UseReducer = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);


  const user = { email: '', password: '' }
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', renderCount: 0, user })

  const [isPending] = useTransition();

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
    dispatch({ type: 'submit', payload: state.user, key: '' })
  }


  return (
    <div>
      <div className='flex items-center justify-center flex-row gap-4 bg-black py-5'>
        <button className='button-normal' onClick={() => dispatch({ type: 'increment', key: '' })}>+</button>
        <button className='button-normal' onClick={() => dispatch({ type: 'decrement', key: '' })}>-</button>
      </div>
      <div className='flex items-center focus:outline-none px-3 h-10'>
        <input ref={inputRef}
          className='border-2 border-red-400 focus:outline-none px-3 h-10'
          type='text'
          value={state.userInput}
          onChange={(event) => dispatch({type: 'user-input', key: '', payload: event.target.value})}>
        </input>
      </div>


      <form className='flex items-center focus:outline-none px-3 h-10'
        onSubmit={(event) => handleSubmit(event)}>
        <input className='border-2 border-red-400 focus:outline-none px-3 h-10'
          type='email'
          value={state.user.email}
          onChange={(event) => dispatch({ type: 'form-input', key: 'email', payload: event.target.value })}
        ></input>
        <input className='border-2 border-red-400 focus:outline-none px-3 h-10'
          type='password'
          value={state.user.password}
          onChange={(event) => dispatch({ type: 'form-input', key: 'password', payload: event.target.value })}
        ></input>
        <button className='button-normal' type='submit'>{isPending ? 'Submitting' : 'Submit Form'}</button>
      </form>


      <p>Count: {state.count}</p>
      <p>Render: {state.renderCount}</p>

    </div >
  )
}

export default UseReducer