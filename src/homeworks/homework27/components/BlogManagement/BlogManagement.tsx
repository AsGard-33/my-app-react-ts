import { useState } from 'react';
import { useBlog } from '../../Homework27'; 
import { StyledTextArea, BlogBox } from './styles';
import Button from 'components/Button/Button';

const BlogManagement = () => {
  const [text, setText] = useState('');
  const { setMessage } = useBlog();

  const handlePost = () => {
    setMessage(text);
    setText('');
  };

  return (
    <BlogBox>
      <StyledTextArea value={text} onChange={(e) => setText(e.target.value)} />
      <Button name='Запостить' onClick={handlePost}></Button>
    </BlogBox>
  );
};

export default BlogManagement;