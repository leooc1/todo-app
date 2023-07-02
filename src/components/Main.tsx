import { parseCookies, setCookie } from 'nookies'
import React from 'react'
import Form from './Form'
import Filters from './Filters'
import { useState, useEffect } from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const cookies = parseCookies()
    let tasks = JSON.parse(cookies.tasks || '[]')
    setTodos(tasks)
  }, [todos])

  return (
    <section className='w-80 sm:w-96 md:w-1/2 mx-auto relative -top-24'>
      <Form />
      <ul className='w-full bg-[var(--bg-main)] rounded-t-md shadow-xl shadow-[#00000093] min-h-[42px] max-h-96 overflow-y-scroll'>
        {children}
      </ul>
      <div className='flex bg-[var(--bg-main)] text-[var(--text-secondary)] py-2 rounded-b-md justify-between px-2 text-sm'>
        <div className='font-bold'>{todos.length} items left</div>
        <div className='w-2/5 sm:flex justify-between hidden'>
          <Filters /> 
        </div>
        <button className='hover:text-[var(--text-hover)]' onClick={() => {
          const cookies = parseCookies()
          let tasks = JSON.parse(cookies.tasks || '[]')
          let clear = tasks.filter((task: any) => { return task.concluded === false })
          setCookie(null, 'tasks', JSON.stringify(clear), {
            maxAge: 3.156e+7,
            path: '/',
          })
        }}>Clear Completed</button>
      </div>
      <div className='w-full sm:hidden justify-between flex px-5 py-2 mt-3 bg-[var(--bg-main)] rounded-md shadow-xl shadow-[#0000003f] text-[var(--text-concluded)]'>
      <Filters />
      </div>
    </section>
  )
}
