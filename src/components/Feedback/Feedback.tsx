import "./style.css";

import Button from "../Button/Button";

import { FeedbackProps } from "./type";

// import { useState } from "react";



function Feedback({onthumbsUp,onthumbsDown,handleReset,likes,dislike}: FeedbackProps) {
  // const [likes, setLikes] = useState(0);
  // const [dislike, setDislikes] = useState(0);

  // const onthumbsUp = () => {
  //   setLikes((prevValue) => {
  //     return prevValue + 1;
  //   });
  // };
  // const onthumbsDown = () => {
  //   setDislikes((prevValue) =>  prevValue + 1);
  // };
  // const handleReset = () => {
  //   setLikes(0);
  //   setDislikes(0);
  // };

  return (
    <div className="feedback-wrapper">
      <div className="button-wrapper">
        <div className="button-control">
          <Button name="👍" onClick={onthumbsUp}/>
          <p className="count">{likes}</p>
        </div>
        <div className="button-control">
          <Button name="👎" onClick={onthumbsDown} />
          <p className="count">{dislike}</p>
        </div>
      </div>
      <Button name="Reset results🚮" onClick={handleReset} />
    </div>
  );
}

export default Feedback;