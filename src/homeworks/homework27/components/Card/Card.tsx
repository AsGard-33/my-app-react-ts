import Message from '../Message/Message';
import { StyledCard, NameCard } from './styles';

const Card = () => {
  return (
    <StyledCard>
      <NameCard>Oleksii Nazarov</NameCard>
      <Message />
    </StyledCard>
  );
};

export default Card;