"use client"
import { Button } from '@/components/utilityComponents/button/Button'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { registerUser } from "../redux/thunks/auth"
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import RegisterValidationSchema from '@/validations/registerFormSchema'
import LoginLayout from '@/layout/LoginLayout'
type Props = {}

const Register = (props: Props) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const { isLoading } = useAppSelector(state => state.auth)
    const [registered, setRegistered] = useState(false)
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(RegisterValidationSchema),
    });

    const submit = (data: any) => {
        delete data.password_confirmation
        dispatch(registerUser(data))
            .unwrap()
            .then((res: any) => {
                if (res.success) {
                    Swal.fire({
                        icon: "success",
                        text: res.message,
                        title: "Success"
                    })
                    setRegistered(true)
                    reset()

                }
                else {
                    Swal.fire({
                        icon: "error",
                        text: res.message,
                        title: "Opps"
                    })
                    reset()
                }

            })
    }

    return (
        <LoginLayout>
            {
                registered && <div className='w-96'>
                    <p className='bg-blue-200 p-6 border border-blue-500 rounded-lg'>
                        Verification Link has been sent to your registered email address.
                        <br />
                        Please click on "Activate Account" button to verify email
                        <br />
                    </p>
                    <small>
                        Note : If mail is not displayed in your inbox then please check in spam section
                    </small>
                </div>
            }
            {!registered &&
                <>
                    <h5>Register</h5>
                    <form
                        onSubmit={handleSubmit(submit)}
                    >
                        <label className=" text-sm font-bold text-[#102030] space-y-10">
                            Username
                        </label>
                        <input
                            type="text"
                            {...register("username")}
                            className={`w-full text-sm border-2 rounded-xl p-2  bg-transparent`}
                            placeholder="Enter your username (no whitespace allowed)"
                        // disabled={isLoading}
                        />
                        <p className="text-red-500 text-sm">
                            {errors.username?.message}
                        </p>
                        <label className=" text-sm font-bold text-[#102030]">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className={`w-full text-sm border-2 rounded-xl p-2  bg-transparent`}
                            placeholder="Enter you email"
                        // disabled={isLoading}
                        />
                        <p className="text-red-500 text-sm">
                            {errors.email?.message}
                        </p>
                        
                        <label className=" text-sm font-bold text-[#102030]">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password")}
                            className={`w-full text-sm border-2  rounded-xl p-2  bg-transparent`}
                            placeholder="Enter your Password"
                        // disabled={isLoading}
                        />
                        <p className="text-red-500 text-sm">
                            {errors.password?.message}
                        </p>
                        <label className=" text-sm font-bold text-[#102030]">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            {...register("password_confirmation")}
                            className={`w-full text-sm border-2  rounded-xl p-2  bg-transparent`}
                            placeholder="Enter your Password"
                        // disabled={isLoading}
                        />
                        <p className="text-red-500 text-sm">
                            {errors.password_confirmation?.message}
                        </p>
                        <div>
                            <div className="flex flex-col gap-y-4 mt-3">
                                <Button className='mx-auto mb-2' type="submit">{isLoading ?
                                    "Please wait..."
                                    :
                                    "Register"
                                }</Button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            {/* <input type="checkbox" id="remember" /> */}
                            <Link href={"/login"} className='flex flex-row align-middle'>
                                Already User ?
                                <h1
                                    className="ml-2 font-light text-sm text-pink-700"
                                >
                                    Login
                                </h1>
                            </Link>
                        </div>
                    </form>
                </>
            }
        </LoginLayout>
    )
}

export default Register