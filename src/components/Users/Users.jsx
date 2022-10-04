import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from './users.module.css';
import userPhoto from '../../assets/image/user.jpg'
import { NavLink } from "react-router-dom";

const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, follow, unfollow, users }) => {

  return (
  <div>
    <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
      totalUsersCount={totalUsersCount} pageSize={pageSize} />
    <div>
      {users.map(user =><div>
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
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
        )}
    </div>
  </div>
  )
}

export default Users;