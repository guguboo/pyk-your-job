function Footer(){
    return (
        <div className="w-full bg-[#FFFFF7] px-[5%] pb-[3%] pt-[5%] text-[#0e0e0e] flex flex-col gap-10 mt-[12rem]">
            <div className="w-[80rem] mx-auto flex flex-row justify-between">
                <div className="flex flex-col gap-5">
                    <div className="font-black">PYK</div>
                    <div className="text-lg w-[40%]">is a freelance platform powered by the ICP blockchain, connecting clients with talented professionals. It offers secure, fast, and commission-free transactions, making freelancing easier and more transparent.</div>
                </div>
                <div className="flex flex-col gap-4 w-[20%] text-lg">
                    <div className="font-semibold">Contact Us</div>
                    <div>Telegram</div>
                    <div>Discord</div>
                    <div>X</div>
                </div>
            </div>
            <div className="w-[80rem] mx-auto flex flex-row justify-center text-base">ⓒ PYK.com - All rights reserved</div>
        </div>
    );
}

export default Footer
