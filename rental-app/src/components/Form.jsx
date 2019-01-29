import React from 'react';

const Forms = ({ match, history }) => {
  return (
    <div>
      <h1>Forms {match.params.id}</h1>
      <button className="btn btn-primary" onClick={() => history.push('/movies')}>Save</button>
    </div>
  );
}

export default Forms;