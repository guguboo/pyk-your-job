function FeatureCard({imgUrl, title, content}){
    return (
        <div className="w-[70%] h-10%  rounded-3xl ml-[11%] px-[2%] flex flex-col gap-2 bg-[#0e0e0e] bg-opacity-60 z-10">
            <img src={"/img/features/" + imgUrl} className="w-[24px]"></img>
            <div className="font-bold text-lg">{title}</div>
            <div className="font-light text-lg">{content}</div>
        </div>
    );
}

export default FeatureCard