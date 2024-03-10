'use client'

import React, { useState } from "react"
import userData from "./userData"


export default function AuthForm() {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='flex flex-col'>
            <label for='email' className='text-xl pb-[15px]'>Введите ваш адрес эл. почты</label>
            <input type='email' value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder='E-mail' id='email' name='EMAIL' required className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl'/>
            
            <label for='password' className='text-xl pb-[15px] pt-[25px]'>Введите пароль</label>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} id='password' name='PASSWORD' placeholder='********' required className='pb-[20px] focus:outline-orange-500 flex justify-end w-[100%] h-[62px] border-[1px] border-gray-500 text-xl pl-[27px] pt-[20px] rounded-xl'/>
            
            <button onClick={() => userData(identifier, password)} className='mt-[25px] flex justify-center items-center text-white bg-[#f97316] h-[62px] text-xl rounded-xl'>Авторизоваться</button>
            <a href='/person/misspass' className='text-right font-semibold text-[#f97316] pt-[15px]'>Забыли пароль?</a>
        </div>
    )
}