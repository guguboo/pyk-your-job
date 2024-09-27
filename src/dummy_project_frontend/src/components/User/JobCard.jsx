import React from 'react';
import { IoPersonCircle, IoTime } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa";

function JobCard() {
    return (
        <div className="w-[20rem] bg-[#141414] text-white shadow-md rounded-xl border border-white p-4">
            {/* Company Logo and Job Title */}
            <div className="flex items-center gap-2">
                {/* Display default icon if no logo */}
                <IoPersonCircle className="w-10 h-10" />
                <div className="flex flex-col">
                    <div className="text-md font-bold">Lead R&D</div>
                    <div className="text-sm text-gray-400">ASTRO</div>
                </div>
            </div>
            {/* Job Info */}
            <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-400 text-sm gap-2">
                    <IoTime className="w-4 h-4 bg-black rounded-full p-[0.15rem] text-[#141414]" />
                    <span>-- Deadline --</span> {/* replace this with actual deadline */}
                </div>
                <div className="flex items-center text-gray-400 text-sm gap-2">
                    <FaMoneyBill className="w-4 h-4 bg-black rounded-full p-[0.15rem] text-[#141414]" />
                    <span>$125</span> {/* replace this with actual salary/rate */}
                </div>
            </div>
        </div>
    );
}

export default JobCard;
