import { useBlog } from '../../Homework27';

const Message = () => {
  const { message } = useBlog();

  return <p>{message}</p>;
};

export default Message;