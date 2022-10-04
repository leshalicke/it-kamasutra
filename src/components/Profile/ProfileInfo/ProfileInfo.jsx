import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/image/user.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

if (!props.profile) {
  return <Preloader />
}

const onMainPhotoSelected = (e) => {
  if(e.target.files.length){
    props.savePhoto(e.target.files[0])
  }
}

  return (
    <div>
      <div>
        {/* <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' /> */}
      </div>
      <div className={s.descBlock}  >
        <img src={props.profile.photos.large || userPhoto} />
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo;
// src={u.photos.small != null ? u.photos.small : userPhoto}