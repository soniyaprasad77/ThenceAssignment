import React from 'react';

const SecondaryButton = ({ text, onClick}) => {
    return (
        
         <button className={`secondary-button shadow appearance-none bg-white border rounded-full w-full py-2 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-[#F1F1F1] `} onClick={onClick}>
         {text}
     </button>
    );
};

export default SecondaryButton;

