import style from './TaskListHeader.module.css';

interface Props {
    tasksCounter: number
    checkedTasksCounter: number
}

export function TaskListHeader({ tasksCounter, checkedTasksCounter }: Props) {
    return (
        <div className={style.header}> 
            <aside>
                <p>Tarefas criadas</p>
                <span>{tasksCounter}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>
                {tasksCounter === 0
                    ? tasksCounter
                    : `${checkedTasksCounter} de ${tasksCounter}`}
                </span>
            </aside>
        </div>
    )
}