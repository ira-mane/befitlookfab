import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const SingleQuestion = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <>
            <div className='border border-black rounded-lg bg-white lg:p-6'>
                <article className='flex items-center justify-between p-4 text-[20px]'>
                    <h2 className='cursor-pointer' onClick={() => setShowAnswer(!showAnswer)}>{question}</h2>
                    <ul>
                        {!showAnswer && <li>
                            <button onClick={() => setShowAnswer(true)}><FiPlus /></button>
                        </li>}
                        {showAnswer && <li>
                            <button onClick={() => setShowAnswer(false)}><FiMinus /></button>
                        </li>}
                    </ul>
                </article>

                <article className={`${showAnswer && "border-t border-gray-400 p-4 lg:p-6 text-[18px]"}`}
                >
                    {showAnswer && <p>{answer}</p>}
                </article>
            </div>
        </>
    )
}

export default SingleQuestion