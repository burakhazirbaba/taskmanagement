import { useState } from "react";

const CreateTask = ({ onCreate, task, taskFormEdit, onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormEdit) {
      onUpdate(task.id, title, taskDesc)
    }
    else {
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormEdit ? (
        <div className="task-update">
          <h2 className="logo">Edit Task</h2>
          <form className="task-form">
            <label className="task-label">Add Task Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Add Task Description</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-button">
              Save
            </button>
          </form>
        </div>
      ) : (
        <div className="create-task">
          <h2 className="logo">TASK MANAGEMENT</h2>
          <form className="task-form">
            <label className="task-label">Add Task Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Add Task Description</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-button">
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default CreateTask;
