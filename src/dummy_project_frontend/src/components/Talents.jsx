
function Talents(){
    return(
            <div id="jobs" className="w-full pt-[11rem]">
                <div className="w-[80rem] mx-auto flex flex-col">
                    <div className="text-5xl font-bold text-center mb-[5%]">Pick Your Talents Now</div>
                    <div className="grid grid-cols-2 justify-center">
                        <a href="/jobs" className="transition-opacity group flex flex-col px-[15%] py-[20%] m-[5%] ml-0 rounded-[3rem] border justify-between gap-24 font-semibold relative bg-no-repeat bg-cover hover:bg-[url('/img/talents/bg.png')]">
                            <div className="group-hover:text-[#0e0e0e] text-9xl">Devs</div>
                            <div className="group-hover:text-[#0e0e0e] font-light text-lg w-[90%]">Find skilled developers for your projects. From web development to blockchain expertise, we have the right talent to bring your ideas to life.</div>
                            <img src="/img/talents/black.png" className="absolute top-20 right-20 w-[13%] group-hover:hidden"/>
                            <img src="/img/talents/white.png" className=" hidden absolute top-20 right-20 w-[13%] group-hover:block"/>
                        </a>
                        <a href="/jobs" className="transition-opacity group flex flex-col px-[15%] py-[20%] m-[5%] mr-0 rounded-[3rem] border justify-between gap-24 font-semibold relative bg-no-repeat bg-cover hover:bg-[url('/img/talents/bg.png')]">
                            <div className="group-hover:text-[#0e0e0e] text-9xl">Non<br/>Devs</div>
                            <div className="group-hover:text-[#0e0e0e] font-light text-lg w-[90%]">Discover a wide range of professionals for marketing, design, writing, and more. Get the expertise you need to grow your business.</div>
                            <img src="/img/talents/black.png" className="absolute top-20 right-20 w-[13%]"/>
                            <img src="/img/talents/white.png" className=" hidden absolute top-20 right-20 w-[13%] group-hover:block"/>
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default Talents