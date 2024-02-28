import { ProfileCardProps } from "./type";

import {
  ProfileCardWraper,
  AvatarControl,
  ProfileAvatar,
  AvatarH2,
  AvatarP,
} from "./style";

function ProfileCard({
  profileData,
  imgSrc,
  children = <h1>User Card</h1>,
}: ProfileCardProps) {
  const normalizeFirstLastName = () => {
    return `${profileData.firstName} ${profileData.lastName}`;
  };

  return (
    <ProfileCardWraper>
      {children}
      <AvatarControl>
        <ProfileAvatar alt="Profile Avatar" src={imgSrc} />
      </AvatarControl>
      <AvatarH2>{normalizeFirstLastName()}</AvatarH2>
      <AvatarP>Career: {profileData.career}</AvatarP>
      <AvatarP>Hair Color: {profileData.hairColor}</AvatarP>
      <AvatarP>Hobby: {profileData.hobby}</AvatarP>
    </ProfileCardWraper>
  );
}

export default ProfileCard;
