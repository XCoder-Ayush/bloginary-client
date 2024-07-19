import { useEffect, useState } from 'react';
import fetchBlogData from '../../services/blog.service';

function Cards() {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
  fetchBlogs()
  },[])
 
    async function fetchBlogs() {
    try {
      const blogsFetched = await fetchBlogData();
      // console.log(blogsFetched);
      setBlogs(blogsFetched);
    } 

    catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={blog.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog.description}
              </p>
              <a
                href={blog.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </>
  );
}

export default Cards;
