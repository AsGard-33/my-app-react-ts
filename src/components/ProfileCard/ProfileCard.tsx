import { ProfileCardProps } from "./type";

import './style.css'

function ProfileCard({src, firstName, lastName, career, hairColor, stature, hobby}: ProfileCardProps) {

  return (
    <div className="profile-card">
      <img src={src} className="profile-avatar" alt="profile-avatar" />
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <p>career: {career}</p>
      <p>hairColor: {hairColor}</p>
      <p>stature: {stature}cm</p>
      <p>hobby: {hobby}</p>
    </div>
  );
}

export default ProfileCard;
