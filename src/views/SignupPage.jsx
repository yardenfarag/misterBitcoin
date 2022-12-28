import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../store/actions/userActions'

export const SignupPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSignUp = (ev) => {
    ev.preventDefault()
    const { value } = ev.target.elements.name
    if (value === '') return
    dispatch(signup(value))
    navigate('/')
  }

  return (
    <section className='signup-page'>
      <form onSubmit={onSignUp} className='signup-form'>
        <label htmlFor='name'>Hi, what's your name?</label>
        <input type='text' name='name' id='name' />
        <button className='form-signup-btn'>Signup</button>
      </form>
    </section>
  )
}
