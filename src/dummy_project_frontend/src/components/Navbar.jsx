function Navbar(){
    return (
        <div className="flex flex-row w-[100%] bg-opacity-0 p-10 sticky">
            <div className="font-black">PYK</div>
            <div className="flex flex-row gap-8 mx-auto text-[1rem] font-bold items-center">
                <div>Home</div>
                <div>Jobs</div>
                <div>How It Works</div>
            </div>
            <div className="font-bold">Log In</div>
        </div>
    );
}

export default Navbar