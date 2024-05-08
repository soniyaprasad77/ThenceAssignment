import React from 'react';

const Footer = () => {
    return (
        <footer className=" w-full m-2  border border-gray-200 rounded-3xl  bg-[#F5F5F5] z-50 flex justify-between items-center px-10 py-2 ">
            <div className="container m-3 mx-auto py-4 px-6 flex justify-between items-center">
                <div>
                    <p className="text-sm">&copy; Talup 2023. All rights reserved </p>
                </div>
                <div className='flex gap-2'>
                    <h1 className="text-sm mr-4 underline">Terms and Conditions</h1>
                    <h2 className="text-sm underline">Privacy Policy</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
