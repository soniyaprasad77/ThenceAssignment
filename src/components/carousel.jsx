import React from 'react'
import Caption from './caption';
import Title from './title';
import girl from "../assets/girl.svg";
import more from "../assets/more.svg";
import arrow from "../assets/arrow.svg";
import brunel from "../../public/brunel.svg";
import PrimaryButton from './primary-button';
function carousel() {
    return (
        <>
            <div className='py-2'>
                <div className="flex justify-center items-center ml-2">
                    <div className="bg-white rounded px-8 pb-8 mb-4">
                        <div className="mb-4 text-center w-[588px] h-[134px]">
                            <Caption caption="success stories" />
                            <Title title="Every success journey we’ve encountered." />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-52">
                    <div className='flex-1'>
                        <div className='flex justify-center items-center ' style={{ width: '100%' }}>
                            <div className='left bg-white mr-[-100px] z-10 rounded-2xl mt-[-60px] border-1 border-[#C9C9C9] shadow-lg'
                                style={{ width: '40%', height: '200px' }}
                            >
                                <div className=''>
                                    <img src={arrow} alt='arrow' className='w-12 h-12 font-bold ' />
                                    <h1 className='mt-[-25px] px-5 text-4xl'>
                                        40%
                                    </h1>
                                    <h6 className=" p-4 text-xs">
                                        Achieved reduction in project execution time by optimizing team availability
                                    </h6>
                                </div>
                            </div>
                            <div className='right bg-no-repeat bg-cover bg-center bg-white rounded-2xl'
                                style={{
                                    backgroundImage: `url(${girl})`,
                                    width: '70%',
                                    height: 400,
                                }}>
                            </div>

                            <div className='bottom-left bg-[#002E18] ml-[-200px] mb-[-320px] z-10 rounded-3xl text-white border-1 border-[#C9C9C9] shadow-xl' style={{ width: "230px", height: '190px' }}>
                                {/* Content */}
                                <h1 className=' px-5 text-4xl py-4'>
                                    $0.5 <span className='text-sm'>
                                        MILLION
                                    </span>
                                </h1>
                                <h6 className=" px-4 pt-2 text-xs">
                                    Reduced client expenses by saving on hiring and employee costs.
                                </h6>
                            </div>
                            <div className='bottom-right px-2 flex items-center bg-white mb-[-300px] ml-[-460px]  z-10 rounded-full border-1 border-[#C9C9C9] shadow-lg' style={{
                                height: "70px", width: "200px"
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={brunel} alt='brunel' className='w-10 h-10 rounded-full border bg-slate-100' />
                                    <div>
                                        <span className='text-xl font-bold'>10 Days</span>
                                        <h1 className='text-xs'>staff deployment</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className=' font-bold' style={{width:"80%"}}>
                            <h1 className='text-3xl  pt-12'>
                                Enhance fortune 50 company’s insights teams research capabilities
                            </h1>
                            <div className=''>
                                <img src={more} alt='more' className='w-10 h-10' />
                            </div>
                            <div className='mr-32 pt-8'>
                                <PrimaryButton text='Explore more ->' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default carousel
