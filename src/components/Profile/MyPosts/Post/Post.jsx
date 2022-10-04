import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
      <img src= 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg' />
      { props.message }
      
      </div>
        <div>
        <span>like</span> { props.like }
      </div>
    </div>
  )
}

export default Post;

// https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png
// https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg