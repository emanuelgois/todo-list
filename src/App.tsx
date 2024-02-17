import { ClipboardText } from 'phosphor-react'
import styles  from './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'
import { TaskModel } from './model/Task.model'
import { useState } from 'react'
import { TaskListHeader } from './components/TaskListHeader'

function App() {
    
    const [taskList, setTaskList] = useState<TaskModel[]>([])

    function handeCreateNewTask(task: TaskModel){
      setTaskList([...taskList, task]);
    } 

    const checkedTasksCounter = taskList.reduce((prevValue, currentTask) => {
      if (currentTask.status) {
        return prevValue + 1
      }
  
      return prevValue
    }, 0)


    function deleteTask(id: number){
      const filteredTasks = taskList.filter((task) => task.id !== id)

      if (!confirm('Deseja mesmo apagar essa tarefa?')) {
        return
      }
  
      setTaskList(filteredTasks)
    }


    function checkTask({ id, value }: { id: number; value: boolean }) {
      const updatedTasks = taskList.map((task) => {
        if (task.id === id) {
          return { ...task, status: value }
        }
  
        return { ...task }
      })
      setTaskList(updatedTasks)
    }

    return (
      <div >
        <Header />

        <div >
          <NewTask onAddNewTask={handeCreateNewTask}/>
           
        </div>

        {taskList.length > 0  ?
          <div className={styles.content}>
              <TaskListHeader tasksCounter={taskList.length} checkedTasksCounter={checkedTasksCounter} />
              {taskList.map( task => {
                return (
                  <Task 
                      key={task.id} 
                      task={task} 
                      onDeleteTask={deleteTask} 
                      onCheckTask={checkTask}
                      />
                )
              })} 
          </div>
            :
          <div className={styles.contentEmpty}>
            <ClipboardText size={64} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        }

      </div>
    )
}

export default App
