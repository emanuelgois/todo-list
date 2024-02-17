import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';
import { TaskModel } from '../model/Task.model'

interface TaskProps {
    onAddNewTask: (task: TaskModel) => void;
}

export function NewTask({ onAddNewTask }: TaskProps) {

    const [taskValue, setTaskValue] = useState('');
    
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        setTaskValue(event.target.value);
    }

    function handeCreateNewTask(event: FormEvent){
        event.preventDefault();
        const newTask: TaskModel = {
            id: new Date().getTime(),
            description: taskValue,
            status: false,
          }

        onAddNewTask(newTask);
         
        setTaskValue('');

    }

    const isNewTaskEmpty = taskValue.length === 0;

    return (
        <div className={styles.content}>
            <form className={styles.taskForm} onSubmit={handeCreateNewTask}>
                <input 
                    placeholder='Adicione uma nova tarefa!'
                    name="task"
                    value={taskValue}
                    onChange={handleNewTaskChange}
                    required
                    />

                <button type='submit'  disabled={isNewTaskEmpty}>
                    Criar
                    <PlusCircle size={16} color="#f2f2f2" weight="bold" /> 
                </button>
            </form>       

        </div>
    )
}