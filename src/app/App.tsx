import { useCallback, useMemo, useState } from 'react';
import { IToDoItem } from '../components/toDoItem/toDoItem';
import { ToDoItemsList } from '../components/toDoItemsList/toDoItemsList';
import { NewToDoItem } from '../components/newToDoItem/newToDoItem';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.scss';
import {
  ToDoButtonsFilter,
  filterType,
} from '../components/toDoButtonsFilter/toDoButtonsFilter';

const testItems: IToDoItem[] = [
  {
    completed: false,
    title: 'Test Todo item',
    id: uuidv4(),
  },
  {
    completed: true,
    title: 'Test Todo item 2',
    id: uuidv4(),
  },
];

const filterMap: Record<filterType, (task: IToDoItem) => boolean> = {
  All: () => true,
  Active: (task: IToDoItem) => !task.completed,
  Completed: (task: IToDoItem) => task.completed,
};

function App() {
  const [items, setItems] = useState<IToDoItem[]>([...testItems]);
  const [filter, setFilter] = useState<filterType>('All');

  const filteredList: IToDoItem[] = useMemo(() => {
    return items.filter(filterMap[filter]);
  }, [items, filter]);

  const addNewItem = useCallback((toDo: IToDoItem) => {
    setItems((items) => [...items, toDo]);
  }, []);

  return (
    <div className={styles.app}>
      <NewToDoItem addItem={addNewItem} />
      <ToDoButtonsFilter filter={filter} setFilter={setFilter} />
      <ToDoItemsList items={filteredList} setItems={setItems} />
    </div>
  );
}

export default App;
