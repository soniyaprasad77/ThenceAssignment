import React from 'react';

const PrimaryButton = ({ text, onClick, disabled }) => {
    return (
        <button
            className={`primary-button shadow appearance-none  bg-black border rounded-full w-full py-3 px-8 text-white leading-tight focus:outline-none focus:shadow-outline hover:bg-[#4E4E4E] `} onClick={onClick} disabled={disabled}
            style={disabled ? { backgroundColor: '#C9C9C9', cursor: 'not-allowed' } : {}}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
