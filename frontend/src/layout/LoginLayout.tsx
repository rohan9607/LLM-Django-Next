import React, { ReactNode } from 'react'
import "./loginlayout.css"
type Props = {
    children: ReactNode
}

const LoginLayout = ({ children }: Props) => {
    return (
        <section className="flex w-full h-screen bg-gray-50">
            <div className="w-full flex-col flex items-center justify-center lg:w-1/2">
                {/* <h1 className='text-center text-2xl mb-2 font-bold text-red-600 mt-12'>LLM Portal
</h1> */}
                <div className="bg-white px-6 py-6 rounded-3xl border-2 border-gray-200">
                    <img className="w-16 mb-3" src="./img/fav-icon.png" alt="" />
                    {/* <h1 className="text-2xl font-semibold text-[#102030]">
                        Welcome Back
                    </h1> */}
                    {/* <p className="font-meduim text-md text-gray-500 mt-4">
                        Welcome Back! Please enter your Details.
                    </p> */}
                    {children}
                </div>
            </div>
            <div
                id='show-bg'
                className={`hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-500`}
            >
                <img className="w-40 h-40 rounded-full animate-bounce" src="img/artificial-intelligence.png" alt="" />
                <h1 className='text-2xl text-white m-0 p-0 ml-12 z-50'>Welcome to world of Large Language Model
</h1>
            </div>
        </section>

    )
}

export default LoginLayout