/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { MdDeleteForever } from "react-icons/md";


const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { title, description, published_at, cover_image, id } = blog;


  let img =
    "https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1";
  return (
    <div className="flex relative">
      <div className="transition border-2 hover:scale-105 border-purple-800 p-4">
        <Link
          to={`/blogs/${id}`}
          className="max-w-sm mx-auto group hover:no-underline  focus:no-underline dark:bg-gray-500"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || img}
          />
          <div className="p- space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-600">
              {" "}
              {new Date(published_at).toLocaleString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
      </div>{" "}
      {deletable && (
        <div
        onClick={() => handleDelete(id)}
        className="absolute  bg-slate-600 p-3 ml-5 
        rounded-full hover:bg-opacity-30 cursor-pointer group 
         hover:scale-105 -top-5 -right-5"
        >
          <MdDeleteForever
            size={40}
            className="text-secondary group-hover:text-primary "
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
