import { memo, useRef } from 'react';
import { IToDoItem } from '../toDoItem/toDoItem';
import styles from './newToDoItem.module.scss';
import { v4 as uuidv4 } from 'uuid';

export interface INewToDoItemProps {
  addItem: (toDo: IToDoItem) => void;
}

export const NewToDoItem = memo(({ addItem }: INewToDoItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const createNewItem = () => {
    if (!inputRef.current?.value.trim()) {
      return;
    }

    const toDo: IToDoItem = {
      completed: false,
      title: inputRef.current.value,
      id: uuidv4(),
    };

    addItem(toDo);
  };

  return (
    <div data-test={'NewToDoItem'} className={styles.wrapper}>
      <input className={styles.input} type="text" ref={inputRef} />
      <button className={styles.button} onClick={createNewItem}>
        Add todo
      </button>
    </div>
  );
});
