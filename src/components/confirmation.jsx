import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import success from '../assets/success.svg';
import { Link } from 'react-router-dom';
import Caption from './caption';
import Title from './title';

const Confirmation = () => {
    const [redirectCountdown, setRedirectCountdown] = useState(5); // Initialize countdown state

    useEffect(() => {
        // Set a timeout to decrement countdown every second
        const redirectTimeout = setTimeout(() => {
            if (redirectCountdown > 0) {
                setRedirectCountdown(countdown => countdown - 1);
            }
        }, 1000);

        return () => clearTimeout(redirectTimeout);
    }, [redirectCountdown]); // Run effect when redirectCountdown changes

    // Redirect to homepage after 5 seconds
    if (redirectCountdown === 0) {
        window.location.href = '/';
    }
    return (
        <div>
            <div className="fixed top-0 w-full bg-white z-50 flex justify-between items-center px-10 py-4">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="mr-4" />
                </div>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div style={{ width: "588px", height: "572px" }}>
                    <div className="p-8 flex flex-col items-center">
                        <img src={success} alt="success img" className="w-10 h-10 justify-center mb-6" />
                        <Caption caption=" Success submitted" />
                        <Title title="Congratulations" />
                        <p className="text-center text-[#727272] mt-4">
                            Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates.
                        </p>
                    </div>
                </div>
            </div>e
            <div className="fixed bottom-0 w-full bg-white z-50 flex justify-center items-center px-10 pb-4">
                <div className="flex items-center">
                    <p className="text-center text-[#727272] py-4">
                        Redirecting you to the homepage in&nbsp;
                        <Link to="/" className="text-[#727272] hover:text-[#000]">
                            <strong>{redirectCountdown} Seconds</strong>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
