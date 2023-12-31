import React, { useEffect, useState } from "react";
import styles from "./TaskItem.module.css";
import { FaPen, FaAlignLeft, FaComment, FaTrash } from "react-icons/fa6";
import { TaskItemPropsI } from "./TaskItem.interface";
import { useDispatch, useSelector } from "react-redux";
import { clickChange, commentChange } from "entites/comments/commentsSlice";
import { RootState } from "entites/store";
import { changeTaskItemName } from "entites/tasks/taskSlice";
import { useAppDispatch } from "hooks/useAppDispatch";
import { addTaskGroup } from "entites/board/boardSlice";

const TaskItem: React.FC<TaskItemPropsI> = ({ item, parentId }) => {
  const [isEditting, setEditting] = useState(false);
  const [itemName, setItemName] = useState(item.name);
  const [isDelete, setDelete] = useState(false);

  const handleDeleteItem = () => {
    dispatchA(
      addTaskGroup({
        id: board1[0].id,
        postData: "",
        updateCase: "deleteItem",
        parentId: parentId,
        selfId: item.id,
      })
    );
  };

  const tasks = useSelector((state: RootState) => {
    return state.tasks.tasks;
  });

  const board1 = useSelector((state: RootState) => {
    return state.board.board;
  });

  const dispatchA = useAppDispatch();
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(clickChange(true));
    dispatch(
      commentChange({ comments: item.comments, parentId, selfId: item.id })
    );
  };

  const handleTaskItemChange = () => {
    setEditting(!isEditting);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
    dispatchA(
      addTaskGroup({
        id: board1[0].id,
        postData: e.target.value,
        updateCase: "addTI",
        parentId: parentId,
        selfId: item.id,
      })
    );
  };

  return (
    <ul>
      <li>
        <div className={styles.taskName}>
          {!isEditting ? (
            <p>{item.name}</p>
          ) : (
            <input type="text" value={itemName} onChange={handleInputChange} />
          )}
          <button className={styles.bbutton} onClick={handleTaskItemChange}>
            <FaPen />
          </button>
        </div>
        {!isDelete ? (
          <button className={styles.bbutton} onClick={() => setDelete(true)}>
            <FaTrash />
          </button>
        ) : (
          <div className={styles.deleteDiv}>
            <p>Delete?</p>
            <button className={styles.yesButton} onClick={handleDeleteItem}>Yes</button>
            <button
              className={styles.noButton}
              onClick={() => setDelete(false)}
            >
              No
            </button>
          </div>
        )}

        <button className={styles.bbutton} onClick={handleClick}>
          <FaComment />
        </button>
      </li>
    </ul>
  );
};

export default TaskItem;
