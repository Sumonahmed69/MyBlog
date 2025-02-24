import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Welcome to
              <span
                className=" ml-3 font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient         "
              >
                MyBlogs
              </span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center gap-5">
              <Link
                to="/blogs"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Read Blogs </span>
                </span>
              </Link>
              <Link
                to="/bookmarks"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white"> Bookmarks</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
