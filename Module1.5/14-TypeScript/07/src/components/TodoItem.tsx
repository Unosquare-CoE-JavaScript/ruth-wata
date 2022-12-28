import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  id: string;
  onDeleteHandler: (id: string) => void;
}> = ({ text, onDeleteHandler, id }) => {
  const handleClick = () => {
    onDeleteHandler(id);
  };
  return (
    <li className={classes.item} onClick={handleClick}>
      {text}{' '}
    </li>
  );
};

export default TodoItem;
