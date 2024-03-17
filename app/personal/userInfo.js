'use client'

import React, { useEffect, useState } from "react"
import InputMask from "react-input-mask";
import { userInfoUpdate } from "@/services/personal/personal";

export default function UserInfo() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [firstReload, setFirstReload] = useState(true)

    useEffect(() => {
        if(firstReload) {
            setTimeout(() => {
                const data = JSON.parse(localStorage.getItem('userData'))
    
                if(data.email) setEmail(data.email)
                if(data.name) setName(data.name)
                if(data.surname) setSurname(data.surname)
                if(data.phone) setPhone(data.phone)
    
                setFirstReload(false)
            }, 300)
        }
    })

    async function onSubmit(event) {
        event.preventDefault()
     
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const sendData = {}
        
        if(!email.match(emailRegex)) {
            alert('Email введено неверно')
        } 
        else {
            sendData.email = email
        }

        if(name.length < 2) {
            alert('Имя введено неверно')
        }
        else {
            sendData.name = name
        }

        if(surname.length < 3) {
            alert('Фамилия введена неверно')
        }
        else {
            sendData.surname = surname
        }

        if(phone) {
            if(phone.includes('_')) {
                alert('Номер введён неверно')
            }
            else {
                sendData.phone = phone
            }
        }

        await userInfoUpdate(localStorage.getItem('userJWT'), JSON.parse(localStorage.getItem('userData')).id, sendData)
    }

    return (
        <form className='info_right w-[60%]' onSubmit={onSubmit}>
            <hr/>
            <label for="EMAIL" className='info_right_block relative flex justify-between text-[21px] font-medium items-center h-[80px] font-[Manrope] px-[5px]'>
                <p>Адрес электронной почты</p>
                <input onChange={e => setEmail(e.target.value)} value={email} className='focus:outline-none text-right' id='EMAIL' name='EMAIL' placeholder='E-mail' />

                <label className='pen1 absolute top-[50%] translate-y-[-50%] right-[-40px] opacity-0'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M12.3145 3.39977C12.9665 2.69332 13.2925 2.3401 13.639 2.13406C14.4749 1.63691 15.5042 1.62145 16.3541 2.09328C16.7063 2.28882 17.0423 2.63211 17.7144 3.31867C18.3865 4.00523 18.7225 4.34851 18.914 4.70831C19.3758 5.57648 19.3607 6.62794 18.874 7.48187C18.6723 7.83576 18.3266 8.1688 17.635 8.83488L9.4068 16.76C8.09627 18.0223 7.441 18.6534 6.62205 18.9733C5.80311 19.2931 4.9028 19.2696 3.10219 19.2225L2.85721 19.2161C2.30904 19.2018 2.03496 19.1946 1.87564 19.0138C1.71631 18.833 1.73807 18.5538 1.78157 17.9954L1.80519 17.6922C1.92763 16.1206 1.98885 15.3348 2.29574 14.6284C2.60264 13.9221 3.13201 13.3485 4.19075 12.2014L12.3145 3.39977Z" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M11.375 3.5L17.5 9.625" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.25 19.25L19.25 19.25" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                </label>
            </label>

            <hr className='pr-[25px]'/>
    
            <label for="NAME" className='info_right_block relative flex justify-between text-[21px] font-medium items-center h-[80px] font-[Manrope] px-[5px]'>
                <p>Имя</p>
                <input onChange={e => setName(e.target.value)} value={name} className='focus:outline-none text-right ' id="NAME" name='NAME' placeholder='Имя' />

                <label className='pen1 absolute top-[50%] translate-y-[-50%] right-[-40px] opacity-0'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M12.3145 3.39977C12.9665 2.69332 13.2925 2.3401 13.639 2.13406C14.4749 1.63691 15.5042 1.62145 16.3541 2.09328C16.7063 2.28882 17.0423 2.63211 17.7144 3.31867C18.3865 4.00523 18.7225 4.34851 18.914 4.70831C19.3758 5.57648 19.3607 6.62794 18.874 7.48187C18.6723 7.83576 18.3266 8.1688 17.635 8.83488L9.4068 16.76C8.09627 18.0223 7.441 18.6534 6.62205 18.9733C5.80311 19.2931 4.9028 19.2696 3.10219 19.2225L2.85721 19.2161C2.30904 19.2018 2.03496 19.1946 1.87564 19.0138C1.71631 18.833 1.73807 18.5538 1.78157 17.9954L1.80519 17.6922C1.92763 16.1206 1.98885 15.3348 2.29574 14.6284C2.60264 13.9221 3.13201 13.3485 4.19075 12.2014L12.3145 3.39977Z" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M11.375 3.5L17.5 9.625" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.25 19.25L19.25 19.25" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                </label>
            </label>
        
            <hr/>
    
            <label for="FIRST_NAME" className='info_right_block relative flex justify-between text-[21px] font-medium items-center h-[80px] font-[Manrope] px-[5px]'>
                <p>Фамилия</p>
                <input onChange={e => setSurname(e.target.value)} value={surname} className='focus:outline-none text-right' id='FIRST_NAME' name="FIRST_NAME" placeholder='Фамилия' />

                <label className='pen1 absolute top-[50%] translate-y-[-50%] right-[-40px] opacity-0'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M12.3145 3.39977C12.9665 2.69332 13.2925 2.3401 13.639 2.13406C14.4749 1.63691 15.5042 1.62145 16.3541 2.09328C16.7063 2.28882 17.0423 2.63211 17.7144 3.31867C18.3865 4.00523 18.7225 4.34851 18.914 4.70831C19.3758 5.57648 19.3607 6.62794 18.874 7.48187C18.6723 7.83576 18.3266 8.1688 17.635 8.83488L9.4068 16.76C8.09627 18.0223 7.441 18.6534 6.62205 18.9733C5.80311 19.2931 4.9028 19.2696 3.10219 19.2225L2.85721 19.2161C2.30904 19.2018 2.03496 19.1946 1.87564 19.0138C1.71631 18.833 1.73807 18.5538 1.78157 17.9954L1.80519 17.6922C1.92763 16.1206 1.98885 15.3348 2.29574 14.6284C2.60264 13.9221 3.13201 13.3485 4.19075 12.2014L12.3145 3.39977Z" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M11.375 3.5L17.5 9.625" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.25 19.25L19.25 19.25" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                </label>
            </label>

            <hr/>
    
            <label for="PHONE" className='info_right_block relative flex justify-between text-[21px] font-medium items-center h-[80px] font-[Manrope] px-[5px]'>
                <p>Телефон</p>
                <InputMask mask="+7 (999) 999-99-99" onChange={e => setPhone(e.target.value)} value={phone} className='focus:outline-none text-right' id='PHONE' name='PHONE' placeholder='Телефон' />

                <label className='pen1 absolute top-[50%] translate-y-[-50%] right-[-40px] opacity-0'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M12.3145 3.39977C12.9665 2.69332 13.2925 2.3401 13.639 2.13406C14.4749 1.63691 15.5042 1.62145 16.3541 2.09328C16.7063 2.28882 17.0423 2.63211 17.7144 3.31867C18.3865 4.00523 18.7225 4.34851 18.914 4.70831C19.3758 5.57648 19.3607 6.62794 18.874 7.48187C18.6723 7.83576 18.3266 8.1688 17.635 8.83488L9.4068 16.76C8.09627 18.0223 7.441 18.6534 6.62205 18.9733C5.80311 19.2931 4.9028 19.2696 3.10219 19.2225L2.85721 19.2161C2.30904 19.2018 2.03496 19.1946 1.87564 19.0138C1.71631 18.833 1.73807 18.5538 1.78157 17.9954L1.80519 17.6922C1.92763 16.1206 1.98885 15.3348 2.29574 14.6284C2.60264 13.9221 3.13201 13.3485 4.19075 12.2014L12.3145 3.39977Z" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M11.375 3.5L17.5 9.625" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.25 19.25L19.25 19.25" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                </label>
            </label>

            <hr/>
    
            {/* <label for="PASSWORD" className='info_right_block relative flex justify-between text-[21px] font-medium items-center h-[80px] font-[Manrope] px-[5px]'>
                <p>Пароль</p>
                <input onChange={e => setPassword(e.target.value)} value={password} className='focus:outline-none text-right' id='PASSWORD' name='PASSWORD' placeholder='Пароль' />

                <label className='pen1 absolute top-[50%] translate-y-[-50%] right-[-40px] opacity-0'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M12.3145 3.39977C12.9665 2.69332 13.2925 2.3401 13.639 2.13406C14.4749 1.63691 15.5042 1.62145 16.3541 2.09328C16.7063 2.28882 17.0423 2.63211 17.7144 3.31867C18.3865 4.00523 18.7225 4.34851 18.914 4.70831C19.3758 5.57648 19.3607 6.62794 18.874 7.48187C18.6723 7.83576 18.3266 8.1688 17.635 8.83488L9.4068 16.76C8.09627 18.0223 7.441 18.6534 6.62205 18.9733C5.80311 19.2931 4.9028 19.2696 3.10219 19.2225L2.85721 19.2161C2.30904 19.2018 2.03496 19.1946 1.87564 19.0138C1.71631 18.833 1.73807 18.5538 1.78157 17.9954L1.80519 17.6922C1.92763 16.1206 1.98885 15.3348 2.29574 14.6284C2.60264 13.9221 3.13201 13.3485 4.19075 12.2014L12.3145 3.39977Z" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M11.375 3.5L17.5 9.625" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.25 19.25L19.25 19.25" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                </label>
            </label> */}

            {/* <hr/> */}

            <button className="text-black border-[#F97316] rounded-[6px] px-[35px] py-[8px] font-semibold border-[2px] mt-[20px]">Сохранить</button>
        </form>
    )
}