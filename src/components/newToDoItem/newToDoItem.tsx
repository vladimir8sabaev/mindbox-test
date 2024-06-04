import { useRef } from 'react';
import { IToDoItem } from '../toDoItem/toDoItem';

export interface INewToDoItemProps {
  addItem: (toDo: IToDoItem) => void;
}

export const NewToDoItem = ({ addItem }: INewToDoItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const createNewItem = () => {
    if (!inputRef.current?.value.trim()) {
      return;
    }

    const toDo: IToDoItem = {
      initialCompleted: false,
      title: inputRef.current.value,
    };

    addItem(toDo);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={createNewItem}>Add todo</button>
    </div>
  );
};
