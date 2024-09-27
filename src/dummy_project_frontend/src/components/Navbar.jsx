import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import { authManager } from '../functions/authManager';

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        authManager.init().then(() => {
            checkAuthStatus();
        });
    }, []);

    const checkAuthStatus = async () => {
        const authStatus = await authManager.isAuthenticated();
        setIsAuthenticated(authStatus);
    };

    const handleLogin = async () => {
        if (isAuthenticated) {
            await authManager.logout();
            setIsAuthenticated(false);
        } else {
            const success = await authManager.login();
            if (success) {
                setIsAuthenticated(true);
                navigate('/jobs');
            }
        }
    };

    return (
        <div className="flex flex-row w-[100%] bg-[#0e0e0e] bg-opacity-60 p-10 fixed top-0 z-20">
            <div className="font-black">PYK</div>
            <div className="flex flex-row gap-8 mx-auto text-[1rem] font-bold items-center">
                <Link to="header" smooth={true} duration={500} className="cursor-pointer">Home</Link>
                <Link to="features" smooth={true} duration={500} className="cursor-pointer">Key Features</Link>
                <Link to="jobs" smooth={true} duration={500} className="cursor-pointer">Jobs</Link>
            </div>
            <a 
                className="flex flex-row font-bold items-center text-[1rem] cursor-pointer"
                onClick={handleLogin}
            >
                {isAuthenticated ? 'Log Out' : 'Log In'}
            </a>
        </div>
    );
}

export default Navbar;