"use client"
import { publicApi } from '@/axios/publicApi'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const page = (props: Props) => {
    const [question, setQuestion] = useState<string>("")
    const [chatHistory, setChatHistory] = useState([])
    const bottomEl = useRef<HTMLDivElement>(null);
    const [gotResponse, setGotResponse] = useState(0)

    useEffect(() => {
        bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
    },[gotResponse])

    const handleQuestion = (e : any) => {
        const {value} = e.target;
        if (value) {
            setQuestion(value)
        }
        else{
            setQuestion("")
        }
    }

    const submitQustion = () => {
        if (question.trim() === "") {
            return false;
        }

        publicApi.post("/submit-question/", {question : question})
        .then((res) => {
            setChatHistory(res.data.chatHistory)
            setGotResponse((prev) => prev + 1)
        })
    }

    console.log({chatHistory});
    
    return (
        <div className='text-white mt-20 px-52'>
            <h1 className='text-4xl font-semibold'>Chat</h1>
            <div className='mt-3 sticky top-0'>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        value={question}
                        onChange={handleQuestion}
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ask question"
                    />
                    <button
                        type="submit"
                        onClick={submitQustion}
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div>
                {
                    chatHistory?.length > 0 && chatHistory.map((chat, i) => {
                        return <div className='my-3' ref={i === chatHistory?.length - 1 ? bottomEl : null}>
                            {i % 2  === 0 ? 
                                <h1 className='p-2 border rounded-md border-slate-900 bg-slate-700 m-1'>{i + 1} ) {chat[0][1]}</h1>
                                :
                                <p className='p-2 border rounded-sm border-slate-900 bg-slate-800 m-1'>{chat[0  ][1]}</p>
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default page