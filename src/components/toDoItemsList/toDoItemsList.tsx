import { IToDoItem, ToDoItem } from '../toDoItem/toDoItem';

export interface IToDoItemsListProps {
  items: IToDoItem[];
}

export const ToDoItemsList = ({ items }: IToDoItemsListProps) => {
  const renderedItems = items.map((item) => {
    return <ToDoItem {...item} />;
  });

  return <ul>{renderedItems}</ul>;
};
