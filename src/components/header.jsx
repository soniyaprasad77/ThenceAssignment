import React from 'react';
import logo from '../assets/logo.svg';
import PrimaryButton from './primary-button';
import SecondaryButton from './secondary-button';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="border border-gray-200 rounded-full m-1  w-full bg-white z-50 flex justify-between items-center px-10 py-2">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="mr-4" />

            </div>
            <div className="flex gap-2">
                <Link to="/Register">
                    <SecondaryButton text="Get Projects" />
                </Link>
                <PrimaryButton text="Onboard Talent" className='bg-[#C9C9C9]' />

            </div>
        </header>
    );
};

export default Header;