import { Dispatch, SetStateAction } from 'react';
import { IToDoItem, ToDoItem } from '../toDoItem/toDoItem';
import styles from './toDoItemsList.module.scss';

export interface IToDoItemsListProps {
  items: IToDoItem[];
  setItems: Dispatch<SetStateAction<IToDoItem[]>>;
}

export const ToDoItemsList = ({ items, setItems }: IToDoItemsListProps) => {
  const renderedItems = items.map((item) => {
    return <ToDoItem setItems={setItems} key={item.id} {...item} />;
  });

  return (
    <ul data-test={ToDoItemsList.name} className={styles.list}>
      {renderedItems}
    </ul>
  );
};
