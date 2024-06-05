import { Dispatch, SetStateAction, memo } from 'react';
import styles from './toDoItem.module.scss';
import clsx from 'clsx';

export interface IToDoItem {
  title: string;
  completed: boolean;
  id: string;
}

export interface IToDoItemProps extends IToDoItem {
  setItems: Dispatch<SetStateAction<IToDoItem[]>>;
}

export const ToDoItem = memo(
  ({ completed, title, setItems, id }: IToDoItemProps) => {
    const toggleCompleted = () => {
      setItems((items) => {
        const newItems = items.map((item) => {
          if (item.id === id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        });
        return newItems;
      });
    };

    return (
      <li
        data-test={'ToDoItem'}
        onClick={toggleCompleted}
        className={clsx([styles.item, completed && styles.checked])}
      >
        <input onChange={() => 1} type="checkbox" checked={completed} />
        <p>{title}</p>
      </li>
    );
  }
);
