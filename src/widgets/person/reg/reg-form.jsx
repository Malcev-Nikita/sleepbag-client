'use client'

import React, { useState } from "react"
import { regUser } from "@/services/personal/reg"
import InputMask from "react-input-mask";


export default function RegForm() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    async function onSubmit(event) {
        event.preventDefault()

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if(email.match(emailRegex) && name.length >= 2 && surname.length >= 3 && !phone.includes('_') && password.length >= 6) {
            const data = await regUser(email, surname, name, phone, password)

            if(data != null && 'jwt' in data) {
                localStorage.setItem('userJWT', data.jwt)
                window.location.href = "/personal";
            }
            else {
                alert('Пользотель с таких email уже существует')
            }
        }
        else {
            if (password.length < 6) {
                alert('Пароль должен быть больше 6 символов')
            }
            else {
                alert('Ошибка данных')
            }
        }
    }

    return (
        <form className='flex flex-col font-[Manrope]' onSubmit={onSubmit}>
            <label for='email' className='text-xl pb-[15px]'>Введите ваш адрес эл. почты</label>
            <input type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)} value={email} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='E-mail' required/>
            
            <div className='flex flex-row gap-[20px]'>
                <div className='flex flex-col w-[50%]'>
                    <label for='name' className='text-xl pb-[15px] pt-[25px]'>Введите имя</label>
                    <input type='name' id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иван' required/>
                </div>

                <div className='flex flex-col w-[50%]'>
                    <label for='surname' className='text-xl pb-[15px] pt-[25px]'>Введите фамилию</label>
                    <input type='name' id='surname' name='surname' onChange={(e) => setSurname(e.target.value)} value={surname} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иванов' required/>
                </div>
            </div>
            
            <label for='phone' className='text-xl pb-[15px] pt-[25px]'>Введите ваш номер телефона</label>
            <InputMask mask="+7 (999) 999-99-99" onChange={e => setPhone(e.target.value)} value={phone} id='phone' name='phone' className='pb-[25px] focus:outline-orange-500 flex justify-end w-[100%] h-[62px] border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Телефон' required />
            
            <label for='password' className='text-xl pb-[15px] pt-[25px]'>Придумайте пароль</label>
            <input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} className='pb-[25px] focus:outline-orange-500 flex justify-end w-[100%] h-[62px] border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='********' required/>
            
            <button type='submit' className='mt-[35px] flex justify-center items-center font-semibold text-white bg-[#f97316] h-[62px] text-xl rounded-xl'>Зарегистрироваться</button>
        </form>
    )
}