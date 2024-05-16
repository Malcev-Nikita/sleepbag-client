'use client'

import { useState } from "react"
import InputMask from "react-input-mask";

export default function QuestionsForm({questions_button, questons_offert, questions_input_name, questions_input_phone, questions_input_email, questions_input_quesion}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [question, setQuestion] = useState('')

    async function onSubmit(e) {
        e.preventDefault()
     
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const sendData = {
            name: null,
            email: null,
            phone: null,
            question: null
        }
        
        if(email.match(emailRegex)) {
            sendData.email = email
        } 
        else {
            alert('Email введено неверно')
        }

        if(name.length >= 2) {
            sendData.name = name
        }
        else {
            alert('Имя введено неверно')
        }

        if(phone) {
            if(!phone.includes('_')) {
                sendData.phone = phone
            }
            else {
                alert('Номер введён неверно')
            }
        }

        if(sendData.name && sendData.email && sendData.phone) {
            alert('Заявка отправлена')

            setName("")
            setEmail("")
            setPhone("")
            setQuestion("")

            sendData.name = null
            sendData.email = null
            sendData.phone = null
            sendData.question = null
        }
    }
    
    return (
        <form onSubmit={e => onSubmit(e)} className="contacts_inputs">
            {questions_input_name != null ? (
                <input value={name} onChange={e => setName(e.target.value)} className="w-[100%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="NAME" placeholder={questions_input_name} />
            ) : ('')}

            {questions_input_phone != null ? (
                <InputMask mask="+7 (999) 999-99-99" onChange={e => setPhone(e.target.value)} value={phone} className="w-[100%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="PHONE" placeholder={questions_input_phone} />
            ) : ('')}

            {questions_input_email != null ? (
                <input value={email} onChange={e => setEmail(e.target.value)} className="w-[100%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="EMAIL" placeholder={questions_input_email} />
            ) : ('')}

            {questions_input_quesion != null ? (
                <textarea value={question} onChange={e => setQuestion(e.target.value)} className="w-[100%] h-[100px] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px] resize-none" name="QUESTION" placeholder={questions_input_quesion} />
            ) : ('')}

            <button className="text=[#fff]" dangerouslySetInnerHTML={questions_button()} />

            <div className="inputs_text"> 
                <p dangerouslySetInnerHTML={questons_offert()} /> 
            </div>
        </form>
    )
}