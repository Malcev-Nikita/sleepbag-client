'use client'

import React, { useState } from "react"
import { regUser } from "@/services/personal/reg"
import InputMask from "react-input-mask";


export default function RegFormMobile() {
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
        <form className='mobile_block_code flex flex-col' onSubmit={onSubmit}>
            <div className='flex flex-col gap-[30px]'>
                <div>
                    <p className='text-[#fff] text-[23px] mb-[15px]'>Введите ваш адрес эл.почты</p>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='E-mail' id='email' name='email' required/>
                </div>

                <div>
                    <p className='text-[#fff] text-[23px] mb-[15px]'>Введите имя</p>
                    <input type='text' onChange={(e) => setName(e.target.value)} value={name} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иван' id='name' name='name' required/>
                </div>

                <div>
                    <p className='text-[#fff] text-[23px] mb-[15px]'>Введите фамилию</p>
                    <input type='text' name='surname' onChange={(e) => setSurname(e.target.value)} value={surname} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иванов' id='surname' required/>
                </div>

                <div>
                    <p className='text-[#fff] text-[23px] mb-[15px]'>Введите ваш номер телефона</p>
                    <InputMask mask="+7 (999) 999-99-99" onChange={e => setPhone(e.target.value)} value={phone} id='phone' name='phone' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Телефон' required />
                </div>

                <div>
                    <p className='text-[#fff] text-[23px] mb-[15px]'>Придумайте пароль</p>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Пароль' id='password' name='password' required/>
                </div>
            </div>

            <div className='flex flex-col text-[#fff] mt-[35px] text-[21px]'>
                <button type='submit' className='flex justify-center items-center text-white bg-[#f97316] h-[62px] text-[23px] rounded-xl'>Зарегистрироваться</button>
                <p className='text-center mt-[15px]'>Уже есть аккаунт? <a href='/personal/auth' className='text-right font-semibold text-[#f97316] pt-[15px]'>Войти</a></p>
            </div>
        </form>
    )
}