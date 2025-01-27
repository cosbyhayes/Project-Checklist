import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import { useEffect, useState } from 'react'

const App = () => {
  const userEmail = 'postgres'
  const [ tasks, setTasks] = useState(null)

  const getData = async() => {
    
    try {
      const respone = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await respone.json()
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => getData, [])

  console.log(tasks)

  //Sort by date
  const sortedTasks = tasks?.sort((a,b) => new Date(a.dates) - new Date(b.Date))

  return (
    <div className="app">
      <ListHeader listName={'🎨Project Check List🎨'} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} />)}
    </div>
  )
}

export default App
