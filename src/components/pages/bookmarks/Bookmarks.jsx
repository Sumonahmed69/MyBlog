import { useEffect, useState } from "react";
import BlogCard from "../blogs/BlogCard";
import { deleteBlog, getBlogs } from "../../../utility";
import EmptySpace from "./EmptySpace";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

if( blogs.length < 1) return <EmptySpace meassage= 'No Bookmarks Found'></EmptySpace> 




  return (
    <div
      className="grid justify-center grid-cols-1 sm:px-8 px-4 lg:px-12 py-8
     gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {blogs.map((blog) => (
        <BlogCard
          deletable={true}
          handleDelete={handleDelete}
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
      
    </div>
  );
};

export default Bookmarks;
