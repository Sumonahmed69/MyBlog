import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../components/pages/home/Home";
import Bookmarks from "../components/pages/bookmarks/Bookmarks";
import Blogs from "../components/pages/blogs/Blogs";
import Blog from "../components/pages/Blog";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=20"),
      },
      {
        path: "/blogs/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
    ],
  },
]);
