import React from "react";

import style from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = ({ statusText, updateStatus }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [status, setStatus] = React.useState(statusText);

  React.useEffect(() => {
    setStatus(statusText);
  }, [statusText]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      {!editMode ? (
        <>
          <div>
            <span className={style.statusText}>{status || "No status..."}</span>
          </div>
          <button onClick={activateEditMode} className={style.addEditBtn}>
            Редактировать
          </button>
        </>
      ) : (
        <>
          <div className={style.inputWrapper}>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deactivateEditMode}
              className={style.input}
              type="text"
              value={status}
            />
            <button
              onClick={deactivateEditMode}
              className={style.deleteEditBtn}
            >
              Сохранить
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
