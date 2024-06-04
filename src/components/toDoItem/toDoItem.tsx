import { memo, useState } from 'react';
import styles from './toDoItem.module.scss';
import clsx from 'clsx';

export interface IToDoItem {
  title: string;
  initialCompleted: boolean;
}

export const ToDoItem = ({ initialCompleted, title }: IToDoItem) => {
  const [completed, setCompleted] = useState(initialCompleted);

  return (
    <li
      onClick={() => setCompleted((check) => !check)}
      className={clsx([styles.item, completed && styles.checked])}
    >
      <input type="checkbox" checked={completed} />
      <p>{title}</p>
    </li>
  );
};

export const MemoItem = memo(ToDoItem);
