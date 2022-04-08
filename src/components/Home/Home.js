import React from 'react';
import Blog from '../Blog/Blog';
import useData from '../hooks/useData';

const Home = () => {
          const [blogs , setBlogs] = useData()
          return (
                    <div >
                              <h2>Our Popular Blogs</h2>
                             <div className='blogs'>
                             {
                                        blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
                              }
                             </div>
                    </div>
          );
};

export default Home;