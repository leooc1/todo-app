import { parseCookies } from 'nookies'
import { useState, useEffect } from 'react'
import Main from '@/components/Main'
import ListItem from '@/components/ListItem'
import TopImage from '@/components/TopImage'
import { Josefin_Sans } from 'next/font/google'
const font = Josefin_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const cookies = parseCookies()
    let tasks = JSON.parse(cookies.tasks || '[]')
    setTodos(tasks)
  }, [todos])

  return (
    <main className={`h-screen grid ${font.className} overflow-hidden`} style={{ gridTemplateRows: '250px 1fr' }}>
      <TopImage />
      <section className="bg-[var(--bg-color)]">
        <Main>
          {todos.map((todo: any, index) => (
            <ListItem key={index} id={index} text={todo.todo} completed={todo.concluded} />
          ))}
        </Main>
      </section>
    </main>
  )
}
