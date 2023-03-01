function Task({ title, completed }) {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Status: {completed ? 'done' : 'not done'}</p>
    </div>
  );
}

export default Task;
