import { Link, useLoaderData } from "react-router";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();

  const { title, cover_image,body_html } = blog;
  let img =
    "https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1";

  return (
    <div>
      <div className="  mx-auto transition border-2 p-2  border-opacity-30   group hover:no-underline focus:no-underline ">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || img}
        />
        <div className="p- space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>

          
          <div>
          <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
