import { useState } from "react";
import Feedback from "../../components/Feedback/Feedback";
 import LoginForm from "../../components/LoginForm/LoginForm";

import './style.css';

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
        <LoginForm/>
      </div>
  );
}

export default Homework21;
