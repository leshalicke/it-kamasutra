import { connect } from 'react-redux';
import { compose } from 'redux';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { addMessageActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {dispatch(addMessageActionCreator(newMessageText))}
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect
) (Dialogs);