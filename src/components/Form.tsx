import React from 'react'
import { parseCookies, setCookie } from 'nookies'

export default function Form() {
    return (
        <form action="/" method='POST' onSubmit={(e) => {
            e.preventDefault()
            const req = e.target as HTMLFormElement
            const cookies = parseCookies()
            let tasks = JSON.parse(cookies.tasks || '[]')
            if (req.todo.value.length == 0) { }
            else {
                if (tasks.push({ todo: req.todo.value, concluded: req.concluded.value == 0 ? false : true })) {
                    console.log('task added')
                } else {
                    console.log('task not added')
                }
                setCookie(null, 'tasks', JSON.stringify(tasks), {
                    maxAge: 3.156e+7,
                    path: '/',
                })
                req.todo.value = ''
            }

        }}>
            <input placeholder='Create a new todo...' type="text" name='todo'
                className='focus:border-0 focus:outline-none shadow-2xl shadow-[#000000]
            mb-5 w-full bg-[var(--bg-main)] px-5 py-2 text-[var(--text-main)] rounded-md
            placeholder:text-[var(--text-secondary)]'/>
            <input type="hidden" name="concluded" value={0} />
        </form>
    )
}
