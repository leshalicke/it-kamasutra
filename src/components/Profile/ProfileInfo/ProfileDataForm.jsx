import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({handleSubmit}) => {

  return <form onSubmit={handleSubmit}>
    <div><button >save</button></div>
  <div>
    <b>Full name</b>: {createField('Full name', 'fullname', [], Input)}
  </div>
  <div>
    <b>Loocking for a job</b>:  {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
  </div>
    <div>
      <b>My professional skills</b>: {createField('My profession skills', 'lookingForAJobDescription', [], Textarea)}
    </div>
    <div>
    <b>About me</b>: {createField('About me', 'aboutMe', [], Textarea)}
  </div>
  <div>
    {/* <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
    })} */}
  </div>
</form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile', 
                                            enableReinitialize: true, 
                                            destroyOnUnmount: false}) (ProfileDataForm)

export default ProfileDataFormReduxForm