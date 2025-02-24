import Hero from "./Hero";
import weve from '../../../assets/weve.svg'

const Home = () => {
  return (
    <div className=" flex  relative  flex-col justify-center min-h-[calc(100vh-132px)]">
      <Hero></Hero>
      

      <img className="bottom fixed absolute bottom-0 w-full" src={weve} alt="" />


    </div>
  );
};

export default Home;
