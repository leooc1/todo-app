import { parseCookies, setCookie } from 'nookies'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method
  if (method === 'GET') {
    const cookies = parseCookies({ req })
    let tasks = JSON.parse(cookies.tasks || '[]')

    res.json(tasks)
  }
  else if (method === 'POST') {
    if(req.body.todo.length === 0) {
      res.redirect('/')
    }

    if (req.body.concluded == 0){
      req.body.concluded = false
    } 
    else req.body.concluded = true
    const cookies = parseCookies({ req })
    let tasks = JSON.parse(cookies.tasks || '[]')

    if (tasks.push(req.body)) {
      console.log('task added')
    } else {
      console.log('task not added')
    }

    setCookie({ res }, 'tasks', JSON.stringify(tasks), {
      maxAge: 100,
      path: '/'
    })
    res.redirect('/')
  }
  else {
    res.send('Method not allowed')
  }
}
