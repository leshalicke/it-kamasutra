import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, 
  toggleFollowingProgress, getUsers } from '../../Redux/users-reducers';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import {getUser, getPageSize, getTotalUsersCount, 
  getCurrenPage, getIsFetching, getFollowingInProgress} from '../../Redux/users-selectors'




class UsersContainer extends PureComponent {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return( <>
    {this.props.isFetching ? <Preloader /> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress} />
    </>)
  };
};

let mapStateToProps = (state) => {
  return {
    users: getUser(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrenPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth
  }
};

export default compose (
    connect(mapStateToProps, 
      {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
      AuthRedirect) (UsersContainer);