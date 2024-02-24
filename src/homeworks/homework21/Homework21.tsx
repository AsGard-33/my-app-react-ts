import { useState } from "react";

import Feedback from "../../components/Feedback/Feedback";

import LoginForm from "../../components/LoginForm/LoginForm";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

import "./style.css";

function Homework21() {
  const [likes, setLikes] = useState(0);
  const [dislike, setDislikes] = useState(0);

  const onthumbsUp = () => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };
  const onthumbsDown = () => {
    setDislikes((prevValue) => prevValue + 1);
  };
  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="homework21-wrapper">
      <Feedback
        likes={likes}
        dislike={dislike}
        onthumbsUp={onthumbsUp}
        onthumbsDown={onthumbsDown}
        handleReset={handleReset}
      />
      <LoginForm />
      <div className="cards-container">
        <ProfileCard
          src="https://masterpiecer-images.s3.yandex.net/559de8d27b2411eebdb7261105627a54:upscaled"
          firstName="Babuin"
          lastName="Babuinovich"
          career="unemployed"
          hairColor="ginger"
          stature={110}
          hobby="eats bananas"
        />
      </div>
    </div>
  );
}

export default Homework21;
