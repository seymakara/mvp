import React from 'react';

const Like = (props) => {
  let heartClass = 'fa fa-heart';
  if (!props.liked) { heartClass += '-o' };
  return (
    <i
      className={heartClass}
      aria-hidden="true"
      onClick={props.handleLike}
      style={{ cursor: 'pointer' }}
    >
    </i>
  );
}

export default Like;