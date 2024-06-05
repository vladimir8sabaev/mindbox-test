import clsx from 'clsx';
import styles from './toDoButtonsFilter.module.scss';
import { Dispatch, SetStateAction } from 'react';

export type filterType = 'All' | 'Active' | 'Completed';

export interface IToDoButtonsFilterProps {
  filter: filterType;
  setFilter: Dispatch<SetStateAction<filterType>>;
}

export const ToDoButtonsFilter = ({
  filter,
  setFilter,
}: IToDoButtonsFilterProps) => {
  return (
    <div data-test={ToDoButtonsFilter.name} className={styles.buttons}>
      <button
        onClick={() => setFilter('All')}
        className={clsx([
          styles.button,
          filter === 'All' && styles.button_active,
        ])}
      >
        All
      </button>
      <button
        onClick={() => setFilter('Active')}
        className={clsx([
          styles.button,
          filter === 'Active' && styles.button_active,
        ])}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('Completed')}
        className={clsx([
          styles.button,
          filter === 'Completed' && styles.button_active,
        ])}
      >
        Completed
      </button>
    </div>
  );
};
