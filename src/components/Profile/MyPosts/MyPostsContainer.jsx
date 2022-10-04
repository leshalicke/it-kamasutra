import { connect } from 'react-redux';
import {  addPostActionCreator} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (newPostText) => {dispatch(addPostActionCreator(newPostText))}
  }
};

export const MyPostsContainer =  connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;