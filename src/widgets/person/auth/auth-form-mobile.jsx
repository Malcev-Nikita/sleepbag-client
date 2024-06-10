'use client'


import React, { useState } from "react"
import { authUser } from "@/services/personal/auth"
import { userInfo } from "@/services/personal/personal"


export default function AuthFormMobile() {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    async function onSubmit(event) {
        event.preventDefault()

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if(identifier.match(emailRegex) && password.length >= 6) {
            const data = await authUser(identifier, password)

            if(data != null) {
                const dataUser = await userInfo(data.jwt)

                localStorage.setItem('userJWT', data.jwt)
                localStorage.setItem('userData', dataUser.data)
                window.location.href = "/personal";
            }
            else {
                alert('Пользователь не найден')
            }
        } 
        else {
            alert('Ошикбка ввода данных')
        }
    }

    return (
        <form className='mobile_block_code flex flex-col' onSubmit={onSubmit}>
            <div className='flex flex-col gap-[30px]'>        
                <div>
                    <p className='text-[#fff] text-[23px] mb-[15px]'>Введите ваш адрес эл.почты</p>
                    <input type='email' value={identifier} onChange={e => setIdentifier(e.target.value)} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='E-mail' id='email' name='email' required/>
                </div>

                <div>
                    <p className='text-[#fff] text-[23px] mb-[15px]'>Введите пароль</p>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Пароль' id='pass' name='pass' required/>
                </div>
            </div>

            <div className='flex flex-col text-[#fff] text-[21px]'>
                <a href='/personal/misspass' className='text-right font-semibold text-[#f97316] text-[21px] pt-[15px]'>Забыли пароль?</a>                    
                
                <button type='submit' className='mt-[15px] flex justify-center items-center text-white bg-[#f97316] h-[62px] text-[23px] rounded-xl'>Продолжить</button>
                
                <p className='text-right mt-[15px]'>У вас ещё нет аккаунта? <a href='/personal/reg' className='text-right font-semibold text-[#f97316] pt-[15px]'>Зарегистрироваться</a></p>
            </div>
        </form>
    )
}