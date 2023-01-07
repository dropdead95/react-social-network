import React from "react";

import style from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
    this.state.editMode = true;
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.state.editMode = true;
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
        {!this.state.editMode ? (
          <>
            <div>
              <span className={style.statusText}>
                {this.props.status || "No status..."}
              </span>
            </div>
            <button
              onClick={this.activateEditMode}
              className={style.addEditBtn}
            >
              Редактировать
            </button>
          </>
        ) : (
          <>
            <div className={style.inputWrapper}>
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.deactivateEditMode}
                className={style.input}
                type="text"
                value={this.state.status}
              />
              <button
                onClick={this.deactivateEditMode}
                className={style.deleteEditBtn}
              >
                Сохранить
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
