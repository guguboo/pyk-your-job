import FeatureCard from "./FeatureCard";


function Features(){
    const description = [
        ["account.png", "Decentralized Profiles", "Own your data and reputation on-chain."],
        ["contract.png", "Smart Contract Escrow", "Secure payments guaranteed by code."],
        ["payments.png", "Low Comission Fee", "Only 5% fee, lower than traditional sites."],
        ["integration.png", "ICP Integration", "Seamless transaction using ICP Tokens."]
    ]
    return (
        <div id="features" style={{
            backgroundImage: `url('/img/features/grid.png')`, 
            backgroundPosition: "center",
            backgroundSize: "680px 680px",
        }} className="bg-no-repeat bg-opacity-30 z-0 pt-[12rem]">

            <div className="w-[80rem] mx-auto">
                <section className=" grid grid-cols-[50%,25%,25%] w-full h-full">
                    <div className="text-5xl font-bold tracking-wide"><span>Key<br/>Features</span></div>
                    <div className="flex flex-col items-center gap-44 justify-center">
                        {description.map((desc, index) => {
                            if(index < description.length-1) return (
                            <FeatureCard key={index} imgUrl={desc[0]} title={desc[1]} content={desc[2]}></FeatureCard>
                        );})
                    }
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <FeatureCard key={3} imgUrl={description[3][0]} title={description[3][1]} content={description[3][2]}></FeatureCard>
                    </div>
                </section>
                
            </div>
        </div>
    );
}

export default Features