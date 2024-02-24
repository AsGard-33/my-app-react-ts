function ProfileCard() {
  const profile = {
    src: "https://masterpiecer-images.s3.yandex.net/559de8d27b2411eebdb7261105627a54:upscaled",
    firstName: "Babuin",
    lastName: "Babuinovich",
    career: "unemployed",
    hairColor: "ginger",
    stature: 110,
    hobby: "eats bananas",
  };

  return (
    <div className="profile-card">
      <img src={profile.src} className="profile-avatar" alt="profile-avatar" />
      <h2>{profile.firstName}</h2>
      <h2>{profile.lastName}</h2>
      <p>career: {profile.career}</p>
      <p>hairColor: {profile.hairColor}</p>
      <p>stature: {profile.stature}cm</p>
      <p>hobby: {profile.hobby}</p>
    </div>
  );
}

export default ProfileCard;
