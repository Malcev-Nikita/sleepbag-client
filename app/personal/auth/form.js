'use client'

import React, { useState } from "react"
import { authUser } from "@/services/personal/auth"
import { userInfo } from "@/services/personal/personal"


export default function AuthForm() {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    async function onSubmit(event) {
        event.preventDefault()
     
        const data = await authUser(identifier, password)

        if(data != null) {
            const dataUser = await userInfo(data.jwt)

            localStorage.setItem('userJWT', data.jwt)
            localStorage.setItem('userInfo', dataUser.data)
            window.location.href = "/personal";
        }
    }

    return (
        <form className='flex flex-col' onSubmit={onSubmit}>
            <label for='email' className='text-xl pb-[15px]'>Введите ваш адрес эл. почты</label>
            <input type='email' value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder='E-mail' id='email' name='EMAIL' required className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl'/>
            
            <label for='password' className='text-xl pb-[15px] pt-[25px]'>Введите пароль</label>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} id='password' name='PASSWORD' placeholder='********' required className='pb-[20px] focus:outline-orange-500 flex justify-end w-[100%] h-[62px] border-[1px] border-gray-500 text-xl pl-[27px] pt-[20px] rounded-xl'/>
            
            <button type="submit" className='mt-[25px] flex justify-center items-center text-white bg-[#f97316] h-[62px] text-xl rounded-xl'>Авторизоваться</button>
            
            <a href='/personal/misspass' className='text-right font-semibold text-[#f97316] pt-[15px]'>Забыли пароль?</a>
        </form>
    )
}