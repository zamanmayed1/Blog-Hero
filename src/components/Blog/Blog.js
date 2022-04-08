import React from 'react';

const Blog = ({blog}) => {
          const {post,image,title} = blog
          return (
                    <div className='blog'>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{post.slice(0,250)}</p> 
                    <button className='readMore'>Read More</button>   
                    </div>
          );
};

export default Blog;