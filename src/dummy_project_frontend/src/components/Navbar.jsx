function Navbar(){
    return (
        <div className="flex flex-row w-[100%] bg-[#0e0e0e] bg-opacity-60 p-10 fixed top-0 z-20">
            <div className="font-black">PYK</div>
            <div className="flex flex-row gap-8 mx-auto text-[1rem] font-bold items-center">
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">Jobs</div>
                <div className="cursor-pointer">How It Works</div>
            </div>
            <div className="flex flex-row font-bold items-center text-[1rem]">Log In</div>
        </div>
    );
}

export default Navbar