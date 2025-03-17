const Loading = () => {
    return (
        <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute w-7 h-7 bg-[#e7e42a] rounded-full animate-spin-custom" style={{ animationDelay: "0s" }}></div>
            <div className="absolute w-6 h-6 bg-[#e7e42acb] rounded-full animate-spin-custom" style={{ animationDelay: "0.2s" }}></div>
            <div className="absolute w-5 h-5 bg-[#bbd333] rounded-full animate-spin-custom" style={{ animationDelay: "0.4s" }}></div>
            <div className="absolute w-4 h-4 bg-[#81a51e] rounded-full animate-spin-custom" style={{ animationDelay: "0.6s" }}></div>
            <div className="absolute w-3 h-3 bg-[#81a51e] rounded-full animate-spin-custom" style={{ animationDelay: "0.8s" }}></div>
    
        </div>
    );
};

export default Loading;
