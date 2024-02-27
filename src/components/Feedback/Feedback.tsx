import Button from "components/Button/Button";

import { FeedbackProps } from "./type";

import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonwithcountContainer,
  Count,
  Image,
  ImageControl,
} from "./style";

function Feedback({
  likes,
  dislikes,
  onDislike,
  onLike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonwithcountContainer>
          <Button name="Like" onClick={onLike} />
          {/* <ImageControl onClick={onLike} >
            <Image src={Like} alt="Like img" />
          </ImageControl> */}
          <Count>{likes}</Count>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislikes}</Count>
        </ButtonwithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
