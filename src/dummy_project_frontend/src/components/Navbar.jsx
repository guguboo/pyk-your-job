import { Link } from "react-scroll";


function Navbar(){
    return (
        <div className="flex flex-row w-[100%] bg-[#0e0e0e] bg-opacity-60 p-10 fixed top-0 z-20">
            <div className="font-black">PYK</div>
            <div className="flex flex-row gap-8 mx-auto text-[1rem] font-bold items-center">
                <Link smooth={true} duration={500} to="header" className="cursor-pointer">Home</Link>
                <Link smooth={true} duration={500} to="features" className="cursor-pointer">Key Features</Link>
                <Link smooth={true} duration={500} to="jobs" className="cursor-pointer">Jobs</Link>
            </div>
            <div className="flex flex-row font-bold items-center text-[1rem]">Log In</div>
        </div>
    );
}

export default Navbar