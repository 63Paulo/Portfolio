import { Deferred } from "next/dist/server/image-optimizer";

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;