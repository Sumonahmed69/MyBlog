import { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router";
import SpinnerLoader from "../SpinnerLoader";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../../utility";

const Blog = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigation = useNavigation();
  const blog = useLoaderData();
  const {
    title,
    published_at,
    comments_count,
    public_reactions_count,
    reading_time_minutes,
    tags,
  } = blog;

  const handeleBookmark = blog => {
    saveBlog(blog)

    console.log(blog)
  }


  if (navigation.state === "loading") return <SpinnerLoader></SpinnerLoader>;

  return (
    <div>
      <h1>
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
          <article className="space-y-8 text-gray-50 dark:text-gray-900">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                {title}
              </h1>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
                <div className="flex items-center md:space-x-2">
                  <p className="text-sm">
                    {reading_time_minutes} min read•{" "}
                    {new Date(published_at).toLocaleString()}
                  </p>
                </div>
                <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                  {comments_count} comments  • {public_reactions_count} views
                </p>
              </div>
            </div>

            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
              {tags.map((tag) => (
                <a
                  key={tag}
                  
                  className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
                >
                  #{tag}
                </a>
              ))}
            </div>

            <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
              <Link
                // to=""
                onClick={() => setTabIndex(0)}
                className={` flex items-center flex-shrink-0 px-5 py-3 space-x-2 
                  ${
                    tabIndex === 0 ? "border border-b-0 " : " border-b"
                  }  rounded-t-lg border-gray-400 dark:border-gray-600
                    text-gray-50 dark:text-gray-900`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>
              <Link
                to={`author`}
                onClick={() => setTabIndex(1)}
                className={` flex items-center flex-shrink-0 px-5 py-3 space-x-2 
               ${
                 tabIndex === 1 ? "border border-b-0 " : " border-b"
               }  rounded-t-lg border-gray-400 dark:border-gray-600
                 text-gray-50 dark:text-gray-900`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>
              <div 
              onClick={() => handeleBookmark(blog)}
              className="bg-primary p-4 ml-2 rounded-full hover:bg-opacity-30 hover:scale-105  cursor-pointer bg-opacity-20">
                <MdBookmarkAdd size={20} className="text-secondary" />
              </div>
            </div>
            <Outlet></Outlet>
          </article>
          <div></div>
        </div>
      </h1>
    </div>
  );
};

export default Blog;
