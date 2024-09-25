import { LinearGradient } from 'react-text-gradients'


function Landing(){
    return(

            <div className="h-full w-full grid grid-cols-[70%,30%] mt-auto">
                <img src="/img/kubus.png" id="kubus1" className="w-[60rem] absolute top-[10%] left-[60%] z-0"/>
                <img src="/img/kubus2.png" id="kubus2" className="w-[35rem] absolute top-[3%] left-[-13%] z-0"/>
                <div className="mx-auto flex flex-col font-bold text-[4rem] justify-center h-[50rem] z-10">
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