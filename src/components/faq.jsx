import React from 'react';
import { useState } from 'react';
import ask from '../assets/ask.svg';

const FAQ = () => {
    const faqData = [
        { question: 'Do you offer freelancers?', answer: 'Answer 1' },
        { question: 'What’s the guarantee that I will be satisfied with the hired talent?', answer: 'Answer 2' },
        { question: 'Can I hire multiple talents at once?', answer: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.' },
        { question: 'Why should I not go to an agency directly?', answer: 'Answer 4' },
        { question: 'Who can help me pick a right skillset and duration for me?', answer: 'Answer 5' },
    ];
    const [answersVisible, setAnswersVisible] = useState(Array(faqData.length).fill(false));

    // Function to toggle visibility of answers
    const toggleAnswerVisibility = (index) => {
        const newVisibility = [...answersVisible];
        newVisibility[index] = !newVisibility[index];
        setAnswersVisible(newVisibility);
    };

    return (
        <div className='bg-[#E8EEE7] flex justify-between m-6 p-6 border rounded-xl'>
            <div className="flex-1">
                <h3 className="font-coveredByYourGrace  text-[#9E9D9D]">whats on your mind</h3>
                <h1 className="text-3xl font-bold">Ask Questions</h1>
                <img className="mt-6" src={ask} alt="ask a" />
            </div>

            <div className="flex-1">

                {faqData.map((faqItem, index) => (
                    <div key={index} className="mb-4  border-b border-gray-300 pb-4 pt-6">
                        <div className="flex justify-between items-center font-bold ">
                            <h3>
                                {faqItem.question}
                                {/* Toggle button for answers */}
                            </h3>
                            <h3>
                                <button className="ml-2 text-3xl" onClick={() => toggleAnswerVisibility(index)}>
                                    {answersVisible[index] ? '-' : '+'}
                                </button>
                            </h3>


                        </div>
                        {/* Show answer if visible */}
                        {answersVisible[index] && <p className="mt-2">{faqItem.answer}</p>}
                    </div>
                ))}
            </div>
        </div >
    );
};

export default FAQ;
