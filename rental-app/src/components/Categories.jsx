import React from 'react';

const Categories = (props) => {
  const { types, onSelect, selectedType } = props
  return (
    <ul className="list-group">
      {types.map(type =>
        <li
          className={type === selectedType ? "list-group-item active" : 'list-group-item'}
          key={type._id}
          onClick={() => onSelect(type)}
        >
          {type.name}
        </li>)
      }
    </ul>
  );
}

export default Categories;