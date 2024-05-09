import React from 'react'
import Caption from './caption';
import Title from './title';
import girl from "../assets/girl.svg";
import more from "../assets/more.svg";
import { useState } from 'react';
import hoveredmore from "../assets/hoveredmore.svg";
import arrow from "../assets/arrow.svg";
import brunel from "/brunel.svg";
import PrimaryButton from './primary-button';
function carousel() {
    const [isHoveredMoreIcon, setIsHoveredMoreIcon] = useState(false);
    const [isHoveredBottomLeft, setIsHoveredBottomLeft] = useState(false);
    const [isHoveredBottomRight, setIsHoveredBottomRight] = useState(false);
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
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

                <div className="block  sm:flex justify-between gap-52">
                    <div className='flex-1'>
                        <div className='flex justify-center items-center' style={{ width: '100%' }}>
                            <div
                                onMouseEnter={() => setIsHoveredLeft(true)}
                                onMouseLeave={() => setIsHoveredLeft(false)}
                                className='left bg-white mr-[-100px] z-10 rounded-2xl mt-[-60px] border-1 border-[#C9C9C9] shadow-lg'
                                style={{
                                    width: '40%',
                                    height: '200px',
                                    backgroundColor: isHoveredLeft ? '#C9C9C9' : 'white',
                                    transition: 'background-color 0.5s ease-in-out',
                                    cursor: 'pointer'
                                }}
                            >
                                <div className=''>
                                    <img src={arrow} alt='arrow' className='w-12 h-12 font-bold ' />
                                    <h1 className='mt-[-25px] px-5 font-switzer text-4xl'>
                                        40%
                                    </h1>
                                    <h6 className=" p-4 text-xs text-[#828282]">
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

                            <div
                                onMouseEnter={() => setIsHoveredBottomLeft(true)}
                                onMouseLeave={() => setIsHoveredBottomLeft(false)}
                                className={`bottom-left  ml-[-200px] mb-[-320px] z-10 rounded-3xl text-white border-1 border-[#C9C9C9] shadow-xl`}
                                style={{
                                    width: "230px",
                                    height: '190px',
                                    backgroundColor: isHoveredBottomLeft ? '#19422F' : '#002E18',
                                    transition: 'background-color 0.5s ease-in-out',
                                    cursor: 'pointer'
                                }}
                            >
                                <h1 className='font-switzer px-5 text-4xl py-4'>
                                    $0.5 <span className='text-sm text-[#A6A3A0]'>
                                        MILLION
                                    </span>
                                </h1>
                                <h6

                                    className=" px-4 pt-2 text-xs text-[#BFBFBF]">
                                    Reduced client expenses by saving on hiring and employee costs.
                                </h6>
                            </div>
                            <div
                                onMouseEnter={() => setIsHoveredBottomRight(true)}
                                onMouseLeave={() => setIsHoveredBottomRight(false)}
                                className='bottom-right px-2 flex items-center bg-white mb-[-300px] ml-[-460px]  z-10 rounded-full border-1 border-[#C9C9C9] shadow-lg'
                                style={{
                                    height: "70px",
                                    width: "200px",
                                    backgroundColor: isHoveredBottomRight ? '#C9C9C9' : 'white',
                                    transition: 'background-color 0.5s ease-in-out',
                                    cursor: 'pointer'

                                }}

                            >
                                <div
                                    className='flex items-center'
                                >
                                    <img src={brunel} alt='brunel' className='w-10 h-10 rounded-full border bg-slate-100' />
                                    <div>
                                        <span className='text-xl font-switzer font-bold'>10 Days</span>
                                        <h1 className='text-xs text-[#828282]'>Staff Deployment</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pl-[-100px] flex-1'>
                        <div className='font-bold' style={{ width: "80%" }}>
                            <div>
                                <h1 className='text-xl  sm:text-3xl pt-12'>
                                    Enhance fortune 50 company’s insights teams research capabilities
                                </h1>
                                <div
                                    onMouseEnter={() => setIsHoveredMoreIcon(true)}
                                    onMouseLeave={() => setIsHoveredMoreIcon(false)}
                                >
                                    <img src={isHoveredMoreIcon ? hoveredmore : more} alt='more' className='w-10 h-10 ' />
                                </div>

                                <div className='mr-32 pt-8'>
                                    <PrimaryButton text='Explore more ->' />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}

export default carousel
