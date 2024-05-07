'use client'

import OrderProduct from '@/entities/personal/cart/order/order-product'
import { getPrice } from '@/store/cart/cart.slice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from "react-input-mask";

export default function OrderForm() {
    const dispatch = useDispatch()

    const [policy, setPolicy] = useState(false)
    const [fullname, setFullname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [adress, setAdress] = useState("")
    const [entrance, setEntrance] = useState("")
    const [apartment, setApartment] = useState("")
    const [comment, setComment] = useState("")

    const cart = useSelector(state => state.cart.items)
    const productsItems = useSelector(state => state.products.items)
    const price = useSelector(state => state.cart.totalPrice)
    

    useEffect(() => {
        if(cart) {
            dispatch(getPrice()) 
        }
    })

    function formSubmit(e) {
        e.preventDefault()

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const fullnameRegex = /^[А-ЯЁ][а-яё]{2,}\s[А-ЯЁ][а-яё]{1,}\s[А-ЯЁ][а-яё]{2,}$/

        const sendData = {}

        setFullname(fullname.trim())

        // Проверка политики
        if(policy) {

            sendData.city = city
            sendData.adress = adress
            sendData.entrance = entrance
            sendData.apartment = apartment
            sendData.comment = comment

            // Проверка ФИО
            if(fullname.trim().match(fullnameRegex)) {
                sendData.fullname = fullname
            }
            else {
                alert('ФИО введёно неверно')
            }

            // Проверка номера телефона
            if(phone) {
                if(!phone.includes('_')) {
                    sendData.phone = phone
                }
                else {
                    alert('Номер введён неверно')
                }
            }
            else {
                alert('Номер введён неверно')
            }

            // Проверка почты
            if(email.match(emailRegex)) {
                sendData.email = email
            } 
            else {
                alert('Email введено неверно')
            }
        }
        else {
            alert("Обязательно принять условия публичной оферты и политики конфиденциальности")
        }
    }

    if(cart && productsItems) {
        return (
            <form onSubmit={e => formSubmit(e)} className='flex flex-row mb-[140px] gap-[250px] mt-[77px]'>
                <div className='w-[50%]'>
                    <div className='mb-[130px]'>
                        <div className='mb-[15px]'>
                            <div className='flex flex-row items-center mb-[15px] gap-[21px]'>
                                <div className='bg-[#e6e9ec] w-[24px] font-[500] h-[24px] flex justify-center items-center'>1</div>
                                <h3 className='font-[500] text-[24px]'>Личные данные и адрес</h3>
                            </div>
                    
                            <div className='mb-[15px]'>
                                <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>ФИО</p>
                                <input type='name' value={fullname} onChange={e => setFullname(e.target.value)} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иванов Иван Иванович' id='name' name='name' required/>
                            </div>
                    
                            <div className='mb-[15px]'>
                                <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Номер телефона</p>
                                <InputMask mask="+7 (999) 999-99-99" onChange={e => setPhone(e.target.value)} value={phone} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' id='PHONE' name='PHONE' placeholder='Телефон' />
                            </div>
                    
                            <div className='mb-[15px]'>
                                <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Электронная почта</p>
                                <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='xxxxxxxx@xxxx.xxx' id='email' name='email' required/>
                            </div>
                    
                            <div className='mb-[15px]'>
                                <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Населённый пункт</p>
                                <input type='city' value={city} onChange={e => setCity(e.target.value)} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Москва, Московская область, Россия' id='city' name='city'/>
                            </div>
                    
                            <div className='mb-[15px]'>
                                <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Улица и номер дома</p>
                                <input type='address' value={adress} onChange={e => setAdress(e.target.value)} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='ул.Татищева 73А' id='address' name='address'/>
                            </div>
                    
                            <div className='flex flex-row gap-[25px]'>
                                <div className='w-[50%]'>
                                    <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Номер подъезда</p>
                                    <input type='address' value={entrance} onChange={e => setEntrance(e.target.value)} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='4' id='entrance' name='entrance'/>
                                </div>
                                <div className='w-[50%]'>
                                    <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Номер квартиры</p>
                                    <input type='address' value={apartment} onChange={e => setApartment(e.target.value)} className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='17' id='number' name='number'/>
                                </div>
                            </div>
                        </div>
                    
                        {/* <div className='mb-[15px]'>
                            <div className='flex flex-row items-center mb-[15px] gap-[21px]'>
                                <div className='bg-[#e6e9ec] w-[24px] font-[500] h-[24px] flex justify-center items-center'>2</div>
                                <h3 className='font-[500] text-[24px]'>Способ доставки</h3>
                            </div>
                            <div>
                                <select className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Почта России (отделение) от 7 дней - 467 рублей' id='delivery' name='address' required></select>
                            </div>
                        </div> */}
                    
                        {/* <div className='mb-[15px]'>
                            <div className='flex flex-row items-center mb-[15px] gap-[21px]'>
                                <div className='bg-[#e6e9ec] w-[24px] font-[500] h-[24px] flex justify-center items-center'>3</div>
                                <h3 className='font-[500] text-[24px]'>Выберите пункт самовывоза</h3>
                            </div>
                            <div>
                                <select className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='ул.Михайлова, д.15, стр.3. 110110 - Отделение' id='point' name='point' required></select>
                            </div>
                        </div> */}
                    
                        {/* <div className='mb-[15px]'>
                            <div className='flex flex-row items-center mb-[15px] gap-[21px]'>
                                <div className='bg-[#e6e9ec] w-[24px] font-[500] h-[24px] flex justify-center items-center'>4</div>
                                <h3 className='font-[500] text-[24px]'>Способ оплаты</h3>
                            </div>
                            <label for='kassa' className='p-[10px] my-[25px] border-gray-500 border-[1px] border-solid rounded-[10px] flex items-center flex-row gap-[10px]'>
                                <div className='mx-[15px]'>
                                    <Image src="/icons/kassa_logo.png" width={45} height={32}></Image>
                                </div>
                                <div className='w-[90%]'>
                                    <h5 className='font-[500]'>Kassa</h5>
                                    <p>Оплата картами или СБП</p>
                                </div>
                                <div>
                                    <input id='kassa' className='input_radio' type='radio' checked></input>
                                </div>
                            </label>
                        </div> */}
                        
                        <div className='flex flex-col gap-[15px]'>
                            <div>
                                <h3 className='font-[500] text-[21px]'>Комментарий к заказу</h3>
                            </div>
                            <div>
                                <textarea value={comment} onChange={e => setComment(e.target.value)} className="w-[100%] h-[140px] border-[2px] border-gray-400 border-solid focus:outline-orange-500 text-black font-semibold rounded-[10px] pl-[24px] pt-[18px] pb-[18px] resize-none" name="QUESTION"/>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className='w-[50%]'>
                    <div className='p-[35px] bg-[#f4f4f4] mt-[32px] rounded-[32px] flex flex-col'>
                        <p className='font-[600] text-[24px] mb-[35px]'>Ваш заказ</p>
                        
                        {cart.carts.map(item => 
                            <OrderProduct product={item} productsItems={productsItems} />    
                        )}
                        
                        <hr className='bg-[#8d8d8d] opacity-30 h-[2px]'/>
                        
                        <div className='flex flex-row justify-between text-[22px] py-[25px]'>
                            <p className='text-[#8d8d8d]'>Товаров на сумму:</p>
                            <p className='text-[#505050] font-[500]'>{price} ₽</p>                    
                        </div>
                        
                        {/* <div className='pb-[25px] text-[22px] flex flex-row justify-between'>
                            <p className='text-[#8d8d8d]'>Стоимость доставки:</p>
                            <p className='text-[#505050] font-[500]'>560 ₽</p>                    
                        </div> */}
                        
                        <hr className='bg-[#8d8d8d] opacity-30 h-[2px]'/>
                        
                        <div className='text-[#f97316] text-[30px] font-[600] flex flex-row justify-between pt-[25px]'>
                            <p>Итого:</p>
                            <p>{ price } ₽</p>                    
                        </div>
                    </div>
                    
                    <div className='my-[20px]'>
                        <label for='accept'>
                            <label for='accept' className='absolute w-[30px] h-[30px]'>
                                <input id='accept' type="checkbox" checked={policy} onChange={e => setPolicy(e.target.checked)} className='option-input2 w-[30px] h-[30px] checkbox absolute translate-y-[20px] translate-x-[10px]'/>
                            </label>
    
                            <p className='ml-[60px] text-[20px] text-[#505050]'>Я принимаю условия <a href='#' className='text-[20px] text-[#000] underline'>публичной оферты</a> и <a href='#' className='text-[20px] text-[#000] underline'>политики конфеденциальности</a>, а также даю согласие на обработку персональных данных</p>
                        </label>
                    </div>
    
                    <div className='flex flex-col gap-[17px] h-[10%]'>
                        <button type='submit' className='text-center text-[#fff] text-[22px] rounded-[10px] h-[50%] bg-[#f97316]'>Оформить заказ</button>
                        <a href='/personal/cart' className='text-center items-center flex justify-center text-[#000] text-[22px] border-[1px] border-black border-solid rounded-[10px] h-[50%] bg-tranparent'>Вернуться к корзине</a>
                    </div>
                </div>
            </form>
        )
    }
}