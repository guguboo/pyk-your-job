function FeatureCard({imgUrl, title, content}){
    return (
        <div className="w-[70%] h-10%  rounded-3xl px-[5%] flex flex-col gap-2">
            <img src={"/img/features/" + imgUrl} className="w-[24px]"></img>
            <div className="font-bold text-lg">{title}</div>
            <div className="font-light text-lg">{content}</div>
        </div>
    );
}

export default FeatureCard