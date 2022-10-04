import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import userPhoto from './../../assets/image/oie_oh7aQUpQyx6d.gif';

const Header = (props) => {
  return (
    <header className={s.header}>
        <img src={userPhoto} />
      <div className={s.loginBlock}>
        { props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
        : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
};

export default Header;
{/* <img src='https://assets.codepen.io/3/kiwi.svg'/> */}