import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Blogs from "./components/pages/blogs/Blogs";
import Bookmarks from "./components/pages/bookmarks/Bookmarks";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <div className="h-20"></div> */}

      <Home></Home>
      <Blogs></Blogs> 
      <Bookmarks></Bookmarks>
      <Footer></Footer>
     
    </>
  );
}

export default App;
