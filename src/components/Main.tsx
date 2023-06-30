import React from 'react'
import Form from './Form'

export default function Main({children}:{children:React.ReactNode}) {
  return (
    <section className='w-80 sm:w-96 md:w-1/2 mx-auto relative -top-24'>
          <Form />
          <ul className='w-full bg-[var(--bg-main)] rounded-t-md shadow-xl shadow-[#00000093] min-h-[42px] max-h-96 overflow-y-scroll'>
            {children}
          </ul>
          <div className='flex bg-[var(--bg-main)] text-[var(--text-concluded)] py-2 rounded-b-md justify-between px-2 text-sm'>
            <div>5 items left</div>
            <div className='w-2/5 sm:flex justify-between hidden'>
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <div>Clear Completed</div>
          </div>
          <div className='w-full sm:hidden justify-between flex px-5 py-2 mt-3 bg-[var(--bg-main)] rounded-md shadow-xl shadow-[#0000003f] text-[var(--text-concluded)]'>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </section>
  )
}
