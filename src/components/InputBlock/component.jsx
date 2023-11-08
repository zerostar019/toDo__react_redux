import classnames from 'classnames'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { createTask } from '../../redux/entities/tasks'
import { Task } from '../Task/component'

export const InputBlock = ({ className }) => {
    const tasks = Object.values(useSelector((state) => state.task.entities))
    const [id, setId] = useState(0);
    const [cleared, setCleared] = useState(false);

    const dispatch = useDispatch();
    const inputText = useRef(null);

    useEffect(() => {
        if (inputText.current.value !== "") {
            dispatch(createTask.actions.addTask({
                id: id,
                name: inputText.current.value,
                createDate: new Date().toLocaleDateString(),
                status: "active"
            }));
            inputText.current.value = "";
        }
    }, [id])

    useEffect(() => {
        dispatch(createTask.actions.deleteAll());
    }, [cleared])

    const data = useSelector((state) => state.task.ids);

    return (
        <div className={classnames(className, styles.div)}>
            <h1 className={styles.h1}>MY TASKS</h1>
            <div>
                <input
                className={styles.task_input}
                placeholder='Add a new task...'
                ref={inputText}
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                    if (inputText.current.value !== "") {
                    setId(id + 1);
                    }
                }
                }}></input>
                <button className={styles.add} onClick={() => {
                    if (inputText.current.value !== "") {
                        setId(id + 1);
                    }
                }}>ADD</button>
            </div>
            <div className={styles.tasksBlock}>
                <div className={styles.tasksRow}>
                    <p>{data.length > 0 && data.length || data.length === 0 && 0} tasks left</p>
                    <button className={styles.clrTaskBtn} onClick={() => setCleared(!cleared)}>Clear all tasks</button>
                </div>
                {tasks.map((task) => (
                    <Task task={task} key={task.id}/>
                ))}
            </div>
        </div>
    );
}