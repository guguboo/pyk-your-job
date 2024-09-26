import { LinearGradient } from 'react-text-gradients'


function Landing(){
    return(
        
            <div className="h-[100vh] w-[80rem] grid grid-cols-[70%,30%] mx-auto">
                <img src="/img/landing/cube1.png" id="cube1" className="w-[60%] absolute top-[7%] left-[60%] z-0"/>
                <img src="/img/landing/cube2.png" id="cube2" className="w-[30%] absolute top-[5%] left-[-13%] z-0"/>
                <div className="flex flex-col font-bold text-[4rem] h-full z-10 justify-center">
                    <div>Where the Right Talent</div>
                    <div>
                        <LinearGradient gradient={['to bottom right', '#FFFFFF 25%, #E4C584 57%, #6526CB 71%, #111386 87%, #131316 100%']}>Pyks </LinearGradient>
                        You.
                    </div>
                    <span className=' font-light text-[1rem] my-8'>
                            Discover top talents with the power of Internet Computer -<br/>
                            Secure, Fast, and Low Commission.
                    </span>
                    <div className='w-[9rem] h-[2.5rem] text-[1rem] font-light border-[1px] border-white rounded-full hover:bg-white hover:text-[#0e0e0e] transition-all flex justify-center align-middle'>
                        <div className='my-auto'>Get Started</div>
                    </div>
                </div>
            </div>
    );
}

export default Landing