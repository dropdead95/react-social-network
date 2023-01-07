import { connect } from "react-redux";

import { addMessageActionCreator } from "../../redux/reducers/dialogsPageReducer";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    data: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
