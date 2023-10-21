
import { RefObject, useEffect, useRef, useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'

type TasksType = {
  id: number
  userId: number
  title: RefObject<HTMLInputElement>
  completed: boolean
}

function App() {
  
  const [tasks, setTasks] = useState<TasksType[]>([])
  // let [text, setText] = useState('')
  let text = useRef<HTMLInputElement>(null)


  const data = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setTasks(json))
  } 

  useEffect(()=>{
    data()
  }, [])
  
  const showTasksHandler = () => {
    data()
  }

  const hideTasksHandler = () => {
    setTasks([])
  }

  const addTaskHandler = () => {
    if(text.current) {
      let newTask = {
        id: 1,
        userId: 1,
        title: text.current.value,
        completed: false
      }  
      setTasks([newTask, ...tasks])
      text.current.value = ''
    }
  }

  
  return (
    <div>
      <Button name='Show Tasks' collback={showTasksHandler}/>
      <Button name='Hide Tasks' collback={hideTasksHandler}/>
      <div>
        <Input text={text} 
                // setText={setText}
                />
        <Button name='Add' collback={addTaskHandler}/>
      </div>
      <ol>
        {tasks.map((t) => {
          return (
            <li key={t.id}>
              <span>{t.userId}</span>
              <span>{t.title}</span>
              <input type="checkbox" checked={t.completed} />
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default App
