import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {reduxForm, Field} from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

  let newMessageText = state.newMessageText;

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageText)
  }

  return (<div className={s.dialogs}>
    <div className={s.dialogsItem}>
      {dialogsElements}
    </div>
    <div className={s.messages}>
      {/* <img src='https://cdn1.vectorstock.com/i/thumb-large/26/05/turn-right-next-red-arrow-hand-drawn-sign-vector-27022605.jpg' /> */}
      <div>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  </div>)
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return ( 
<form onSubmit={props.handleSubmit}>
  <div>
  <Field component={Textarea} validate={[required, maxLength100]} 
        name={'newMessageText'} placeholder='Enter your message' />
  </div>
  <div>
  <button>Send</button>
</div>
  </form>
)
};

const AddMessageFormRedux = reduxForm ({form:'dialogAddMessageForm'}) (AddMessageForm);

export default Dialogs;