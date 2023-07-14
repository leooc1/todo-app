import { parseCookies, setCookie } from 'nookies'

interface ListItemProps {
    theme: string,
    id: number,
    text: string,
    completed?: boolean
}

export default function ListItem(props: ListItemProps) {

    return (
        <>
            <li className={`px-5 py-2 border-b-[1px] ${props.theme == 'dark' ? 'border-[var(--dark-text-concluded)] bg-[var(--dark-bg-main)]' : 'border-[var(--light-text-concluded)] bg-[var(--light-bg-main)]'} rounded-t-md ${props.theme == 'dark' ? `${props.completed ? 'text-[var(--dark-text-secondary)] line-through' : 'text-[var(--dark-text-hover)]'}` : `${props.completed ? 'text-[var(--light-text-secondary)] line-through' : 'text-[var(--dark-bg-main)]'}`} flex items-center text-ellipsis h-12`}>
                <button onClick={() => {
                    const cookies = parseCookies()
                    let tasks = JSON.parse(cookies.tasks || '[]')
                    tasks[props.id].concluded = !props.completed
                    setCookie(null, 'tasks', JSON.stringify(tasks), {
                        maxAge: 3.156e+7,
                        path: '/',
                    })
                }}
                    className={`w-7 h-7 flex justify-center items-center rounded-full border border-[var(--dark-text-secondary)] mr-4 ${props.completed ? 'bg-gradient-to-r p-2' : 'p-[13px]'} from-[#57ddff] to-[#c058f3]`}>
                    {props.completed ? <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg> : null}
                </button>
                <input className='w-full text-ellipsis bg-transparent'
                    style={{ pointerEvents: 'none', userSelect: 'none', cursor: 'default', }}
                    type="text" value={props.text} disabled />
                <button onClick={() => {
                    const cookies = parseCookies()
                    let tasks = JSON.parse(cookies.tasks || '[]')
                    tasks.splice(props.id, 1)
                    setCookie(null, 'tasks', JSON.stringify(tasks), {
                        maxAge: 3.156e+7,
                        path: '/',
                    })
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                </button>
            </li >
        </>
    )
}
