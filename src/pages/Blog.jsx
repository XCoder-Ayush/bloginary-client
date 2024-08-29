import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogCardData } from '../services/blogPage.service';
import { LoaderCircle } from "lucide-react";

const Blog = () => {
  const { userId, slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [isBlogAvailable, setIsBlogAvailable] = useState(false);

  useEffect(() => {
    //fetch blog by using blogId
    fetchBlog();
    setIsBlogAvailable(true);
  }, []);

  async function fetchBlog() {
    try {
      const blogsFetched = await fetchBlogCardData();
      const blogId = slug.split("-").pop();
      blogsFetched.forEach((currentBlog) => {
        if(currentBlog.id == blogId){
          setBlog(currentBlog);
        } 
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {/* <h1>{title.replace(/-/g, ' ')}</h1> */}
      <p>User ID: {userId}</p>
      <p>Title: {slug}</p>
      {(!isBlogAvailable) ? (
        <div className="container h-screen flex justify-center items-center">
        <LoaderCircle className=" animate-spin h-20 w-20 text-primary" />
      </div>
      ) : (
        <p>Description: {blog?.description}</p>
      )}
    </div>
  );
};

export default Blog;
