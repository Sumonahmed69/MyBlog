import { ScaleLoader } from "react-spinners";


const SpinnerLoader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-132px)]">
       
            <ScaleLoader size={100} />
        </div>
    );
};

export default SpinnerLoader;