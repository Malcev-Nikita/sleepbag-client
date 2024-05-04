'use client'

import { useState } from "react"

export default function MisspassForm() {
    const [email, setEmail] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if(email.match(emailRegex)) {
            const code = Math.floor(100000 + Math.random() * (999999 + 1 - 100000))

            alert("Код восстановления: " + code)
            
            window.location.replace("/personal/misspass/confirm");
        }
    }

    return (
        <form className='flex flex-col' action='/forg_pass' method='post' onSubmit={e => onSubmit(e)}>
            <label for='email' className='text-xl pb-[15px]'>Адрес электронной почты</label>
            <input type='email' value={ email } onChange={e => setEmail(e.target.value)} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='E-mail' id='email' name='email' required/>
            <button type='submit' className='mt-[25px] flex justify-center items-center text-white bg-[#f97316] h-[62px] text-xl rounded-xl'>Продолжить</button>

            <a href='/personal/auth' className='text-right font-semibold text-[#f97316] pt-[15px]'>Вернуться ко входу</a>
        </form>
    )
}