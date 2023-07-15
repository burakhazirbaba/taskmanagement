import CreateTask from "./CreateTask";
import { useState } from "react";

const TaskShow = ({ task, onDelete, onUpdate }) => {
  const [showEdit, setshowEdit] = useState(false);

  const handleEdit = () => {
    setshowEdit(!showEdit);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setshowEdit(false)
    onUpdate(id, updatedTitle, updatedTaskDesc)
  }
  return (
    <div className="task-show">
      {showEdit ? (
        <CreateTask task={task} taskFormEdit={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3 className="task-info">Your Task:</h3>
          <p>{task.title}</p>
          <h3 className="task-info">To Do:</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default TaskShow;
