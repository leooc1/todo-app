import React from 'react'
import Form from './Form'
import Filters from './Filters'
interface MainProps {
  theme: string,
  children: React.ReactNode
}

export default function Main(props: MainProps) {

  return (
    <section className='w-80 sm:w-96 md:w-1/2 mx-auto relative -top-24'>
      <Form theme={props.theme} />
      <ul className={`w-full ${props.theme == 'dark' ? 'bg-[var(--dark-bg-main)]' : 'bg-[var(--light-bg-main)]'} rounded-t-md shadow-xl shadow-[#00000093] min-h-[20px] max-h-80 overflow-y-scroll scroll-list`}>
        {props.children}
      </ul>
      <Filters theme={props.theme}/>
    </section>
  )
}
