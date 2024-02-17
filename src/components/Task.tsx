import { Check, Trash } from "phosphor-react";
import { TaskModel } from "../model/Task.model";
import style from './Task.module.css';

interface Props {
    task: TaskModel
    onDeleteTask: (id: number) => void
    onCheckTask: ({ id, value }: { id: number; value: boolean }) => void
  }

export function Task({ task, onDeleteTask ,onCheckTask}: Props) {

    function handleTaskToggle() {
        onCheckTask({ id: task.id, value: !task.status })
    }

    function handleDeleteTask(){
        onDeleteTask(task.id);
    }

    const checkboxCheckedClassname = task.status ? style['checkbox-checked'] : style['checkbox-unchecked']
    const paragraphCheckedClassname = task.status ? style['paragraph-checked']  : ''

    return (
        <div>
            <div className={style.container}>

                <div>
                    <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={task.status} className={style.checkbox}/>
                    <span className={`${style.checkbox} ${checkboxCheckedClassname}`}>
                        {task.status && < Check size={12} />}
                    </span>

                    <p className={`${style.paragraph} ${paragraphCheckedClassname}`}>
                        {task.description}
                    </p>
                    </label>
                </div>              

                <button onClick={handleDeleteTask}>
                    <Trash size={16} color="#808080" />
                </button>
            </div>
        </div>
    )
}