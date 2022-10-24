import React from "react";
import s from './users.module.css';
import userPhoto from '../../assets/image/user.jpg'
import { NavLink } from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
  return( 
      <div>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} />
              </NavLink>
            </div>
            <div>
            {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {follow(user.id)
                                      }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.aboutMe}</div>
              <div>{user.lookingForAJobDescription}</div>
            </span>
          </span>
        </div>
        )
    }
export default User;