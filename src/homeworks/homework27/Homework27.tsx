import { createContext, useContext, useState } from 'react';
import BlogManagement from './components/BlogManagement/BlogManagement';
import Card from './components/Card/Card';

const BlogContext = createContext({
  message: '',
  setMessage: (message: string) => {}
});

export const useBlog = () => useContext(BlogContext);

export const Homework27 = () => {
  const [message, setMessage] = useState('');

  return (
    <BlogContext.Provider value={{ message, setMessage }}>
      <BlogManagement />
      <Card />
    </BlogContext.Provider>
  );
};

export default Homework27;