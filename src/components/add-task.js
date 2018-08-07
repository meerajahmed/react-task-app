import React from 'react';

const AddTask = () => {
  return (
    <div>
      <button type="button">+ New Task</button>
      <form>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        textaria
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddTask;