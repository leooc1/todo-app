import { useState, useEffect } from 'react'
import { setCookie, parseCookies } from 'nookies'

export default function Filters({ theme }: { theme: string }) {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  useEffect(() => {
    const cookies = parseCookies()
    let filter = cookies.filter || 'all'
    setFilter(filter)
    let tasks = JSON.parse(cookies.tasks || '[]')
    setTodos(tasks)
  }, [filter, todos])

  function removeActive() {
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach((button) => {
      button.classList.remove('text-blue-500')
      button.classList.remove('font-bold')
    })
  }

  return (
    <>
      <div className={`flex ${theme == 'dark' ? 'bg-[var(--dark-bg-main)] text-[var(--dark-text-secondary)]' : 'bg-[var(--light-bg-main)] text-[var(--light-text-secondary)]'} py-2 rounded-b-md justify-between px-2 text-sm`}>
        <div className='font-bold'>{todos.length} items left</div>
        <div className='w-2/5 sm:flex justify-between hidden'>
          <button className={`${theme == 'dark' ? 'sm:hover:text-[var(--dark-text-hover)]' : 'sm:hover:text-[var(--light-text-hover)]'} btn ${filter == 'all' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
            removeActive()
            button.currentTarget.classList.add('text-blue-500')
            button.currentTarget.classList.add('font-bold')
            setCookie(null, 'filter', 'all', {
              maxAge: 3.156e+7,
              path: '/',
            })
          }}>All</button>
          <button className={`${theme == 'dark' ? 'sm:hover:text-[var(--dark-text-hover)]' : 'sm:hover:text-[var(--light-text-hover)]'} btn ${filter == 'active' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
            removeActive()
            button.currentTarget.classList.add('text-blue-500')
            button.currentTarget.classList.add('font-bold')
            setCookie(null, 'filter', 'active', {
              maxAge: 3.156e+7,
              path: '/',
            })
          }}>Active</button>
          <button className={`${theme == 'dark' ? 'sm:hover:text-[var(--dark-text-hover)]' : 'sm:hover:text-[var(--light-text-hover)]'} btn ${filter == 'completed' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
            removeActive()
            button.currentTarget.classList.add('text-blue-500')
            button.currentTarget.classList.add('font-bold')
            setCookie(null, 'filter', 'completed', {
              maxAge: 3.156e+7,
              path: '/',
            })
          }}>Completed</button>
        </div>
        <button className={`${theme == 'dark' ? 'hover:text-[var(--dark-text-hover)]' : 'hover:text-[var(--light-text-hover)]'}`} onClick={() => {
          const cookies = parseCookies()
          let tasks = JSON.parse(cookies.tasks || '[]')
          let clear = tasks.filter((task: any) => { return task.concluded === false })
          setCookie(null, 'tasks', JSON.stringify(clear), {
            maxAge: 3.156e+7,
            path: '/',
          })
        }}>Clear Completed</button>
      </div>
      <div className={`w-full sm:hidden justify-between flex px-5 py-2 mt-3 ${theme == 'dark' ? 'bg-[var(--dark-bg-main)] text-[var(--dark-text-secondary)]' : 'bg-[var(--light-bg-main)] text-[var(--light-text-secondary)]'} rounded-md shadow-xl shadow-[#0000003f]`}>
        <button className={`${theme == 'dark' ? 'sm:hover:text-[var(--dark-text-hover)]' : 'sm:hover:text-[var(--light-text-hover)]'} btn ${filter == 'all' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
          removeActive()
          button.currentTarget.classList.add('text-blue-500')
          button.currentTarget.classList.add('font-bold')
          setCookie(null, 'filter', 'all', {
            maxAge: 3.156e+7,
            path: '/',
          })
        }}>All</button>
        <button className={`${theme == 'dark' ? 'sm:hover:text-[var(--dark-text-hover)]' : 'sm:hover:text-[var(--light-text-hover)]'} btn ${filter == 'active' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
          removeActive()
          button.currentTarget.classList.add('text-blue-500')
          button.currentTarget.classList.add('font-bold')
          setCookie(null, 'filter', 'active', {
            maxAge: 3.156e+7,
            path: '/',
          })
        }}>Active</button>
        <button className={`${theme == 'dark' ? 'sm:hover:text-[var(--dark-text-hover)]' : 'sm:hover:text-[var(--light-text-hover)]'} btn ${filter == 'completed' ? 'text-blue-500 font-bold' : ''}`} onClick={(button) => {
          removeActive()
          button.currentTarget.classList.add('text-blue-500')
          button.currentTarget.classList.add('font-bold')
          setCookie(null, 'filter', 'completed', {
            maxAge: 3.156e+7,
            path: '/',
          })
        }}>Completed</button>
      </div>
    </>
  )
}
