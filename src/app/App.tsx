import { useState } from 'react';
import { IToDoItem } from '../components/toDoItem/toDoItem';
import { ToDoItemsList } from '../components/toDoItemsList/toDoItemsList';
import { NewToDoItem } from '../components/newToDoItem/newToDoItem';

const testItems: IToDoItem[] = [
  {
    initialCompleted: false,
    title: 'Test Todo item',
  },
  {
    initialCompleted: false,
    title: 'Test Todo item 2',
  },
];

function App() {
  const [items, setItems] = useState<IToDoItem[]>([...testItems]);

  const [filteredItems, setFilteredItems] = useState<IToDoItem[]>();

  const addNewItem = (toDo: IToDoItem) => {
    setItems((items) => [...items, toDo]);
  };

  return (
    <>
      <NewToDoItem addItem={addNewItem} />
      <ToDoItemsList items={items} />
    </>
  );
}

export default App;
