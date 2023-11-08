import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../../redux/entities/tasks';
import styles from './styles.module.css';
import classnames from 'classnames';
import { useRef, useState } from 'react';

export const Task = ({ task }) => {
    const value = useRef();
    const [isEditable, setIsEditable] = useState(false);
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();

    const deleteTask = (task) => {
        dispatch(createTask.actions.deleteTask(task));
    }

    const updateTask = () => {
        if (value.current.value !== "") {
        dispatch(createTask.actions.updateTask({
            id: task.id,
            changes: {
                name: value.current.value
            }
        }))}
        else {
            dispatch(createTask.actions.deleteTask(task.id))
        }
    }
    
    return (
        <div className={styles.task}>
        <div className={styles.task1}>
        <input type={'checkbox'} className={styles.checkbox}
        onChange={() => setChecked(!checked)}></input>
        <input defaultValue={task.name}
        className={classnames(styles.input, {
            [styles.ready]: checked === true
        })} 
        disabled={!isEditable}
        ref={value}
        />
        </div>
        <div className={styles.task2}>
            {!isEditable ? <button className={styles.editBtn} onClick={() => setIsEditable(!isEditable)}></button> 
            : 
            <button className={styles.permit} onClick={() => {
            updateTask()
            setIsEditable(!isEditable);
            }}></button>}
            <button className={styles.deleteBtn} onClick={(e) => (deleteTask(task.id))}></button>
        </div>
    </div>
    );
}