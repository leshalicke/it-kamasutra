import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from './../../Redux/profile-reducer';
import {AuthRedirect} from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import WithURLParams from './../../hoc/withURLParams'



class ProfileContainer extends React.Component {

  refreshProfile(){
    let userId = this.props.params?.userId ? this.props.params?.userId : this.props.authorizedUserId;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  };

componentDidMount() {

  this.refreshProfile()
};

componentDidUpdate(prevProps, prevState){
  if(this.props.params?.userId != prevProps.params?.userId){
    this.refreshProfile();
  }
};

  render() {
    return (
      <Profile {...this.props} 
      profile={this.props.profile} 
      status={this.props.status} 
      updateStatus={this.props.updateStatus} 
      isOwner={!this.props.params?.userId} 
      savePhoto={this.props.savePhoto}/>
    )
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
AuthRedirect, WithURLParams
) (ProfileContainer)
