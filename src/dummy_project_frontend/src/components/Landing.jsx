import { LinearGradient } from 'react-text-gradients';

function Landing(){

    return(
        
            <div id="header" className="h-[100vh] w-[80rem] grid grid-cols-[70%,30%] mx-auto">
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
                        <a className='my-auto' href="/jobs">Get Started</a>
                    </div>
                </div>
            </div>
    );
}

export default Landing