import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const Droparea = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const dropAreaRect = document.querySelector('.drop-area').getBoundingClientRect();
      const relativeX = offset.x - dropAreaRect.left;
      const relativeY = offset.y - dropAreaRect.top;

      setDroppedItems((items) => [
        ...items, 
        { ...item, left: relativeX, top: relativeY }
      ]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="drop-area"
      style={{ width: '100%', height: '100vh', position: 'relative', border: '1px solid black' }}
    >
      {droppedItems.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.id}
          width={'100px'}
          style={{ position: 'absolute', left: `${item.left}px`, top: `${item.top}px` }}
        />
      ))}
    </div>
  );
};

export default Droparea;
