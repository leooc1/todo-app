import { parseCookies, setCookie } from 'nookies'
import { useState, useEffect } from 'react'
import Main from '@/components/Main'
import ListItem from '@/components/ListItem'
import TopImage from '@/components/TopImage'
import { Josefin_Sans } from 'next/font/google'
const font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  const [theme, setTheme] = useState('light')
  const [todos, setTodos] = useState([])
  const [todoFilter, setTodoFilter] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const cookies = parseCookies()
    let theme = cookies.theme || 'light'
    setTheme(theme)
    let tasks = JSON.parse(cookies.tasks || '[]')
    setTodos(tasks)
    let filter = cookies.filter || 'all'
    setFilter(filter)
    if (filter == 'active') {
      setTodoFilter(tasks.filter((task: any) => { return task.concluded === false }))
    }
    else if (filter == 'completed') {
      setTodoFilter(tasks.filter((task: any) => { return task.concluded === true }))
    }
    else {
      setTodoFilter(tasks)
    }
  }, [todos, filter])

  return (
    <main className={`h-screen grid ${font.className} overflow-hidden`} style={{ gridTemplateRows: '250px 1fr' }}>
      <TopImage />
      <section className="bg-[var(--bg-color)]">
        <Main>
          {todoFilter.map((todo: any, index) => (
            <ListItem key={index} id={index} text={todo.todo} completed={todo.concluded} />
          ))}
        </Main>
      </section>
    </main>
  )
}
