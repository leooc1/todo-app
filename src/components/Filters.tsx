import { useState, useEffect } from 'react'
import { setCookie, parseCookies } from 'nookies'

export default function Filters() {
  const [filter, setFilter] = useState('all')
  useEffect(() => {
    const cookies = parseCookies()
    let filter = cookies.filter || 'all'
    setFilter(filter)
  }, [filter])
  
  function removeActive() {
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach((button) => {
      button.classList.remove('text-blue-400')
      button.classList.remove('font-bold')
    })
  }

  return (
    <>
      <button className={`sm:hover:text-[var(--text-hover)] btn ${(filter=='all')?'text-blue-400 font-bold':''}`} onClick={(button) => {
        removeActive()
        button.currentTarget.classList.add('text-blue-400')
        button.currentTarget.classList.add('font-bold')
        setCookie(null, 'filter', 'all', {
          maxAge: 3.156e+7,
          path: '/',
        })
      }}>All</button>
      <button className={`sm:hover:text-[var(--text-hover)] btn ${filter=='active'?'text-blue-400 font-bold':''}`} onClick={(button) => {
        removeActive()
        button.currentTarget.classList.add('text-blue-400')
        button.currentTarget.classList.add('font-bold')
        setCookie(null, 'filter', 'active', {
          maxAge: 3.156e+7,
          path: '/',
        })
      }}>Active</button>
      <button className={`sm:hover:text-[var(--text-hover)] btn ${filter=='completed'?'text-blue-400 font-bold':''}`} onClick={(button) => {
        removeActive()
        button.currentTarget.classList.add('text-blue-400')
        button.currentTarget.classList.add('font-bold')
        setCookie(null, 'filter', 'completed', {
          maxAge: 3.156e+7,
          path: '/',
        })
      }}>Completed</button>
    </>
  )
}
