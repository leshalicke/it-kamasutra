import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          <div>
            <Field component={Textarea} name={'newPostText'} 
            placeholder='Enter your Post' validate={[required, maxLength10]} />
          </div>
          <div>
          <button>Add post</button>
          </div>
        </div>
    </form>
  )
  };
  
  const AddPostFormRedux = reduxForm ({form:'ProfileAddPostForm'}) (AddPostForm);

const MyPosts = React.memo(props => {

  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  let postsElement = props.posts.map ( p => <Post key={p.id} message={p.message} like={p.like} />)

  let newPostElement = React.createRef();

  const AddNewPost = (values) => {
    props.onAddPost(values.newPostText)
  };

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My post</h3>
      </div>
      <AddPostFormRedux onSubmit={AddNewPost}/>
      <div className={s.posts}>
      { postsElement }
      </div>
    </div>
  )
})

export default MyPosts;