'use server'

import { authUser } from "@/services/personal/auth"
// import { userAddCookie } from "./form"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


function userAddCookie(jwt) {
    if(jwt == null) {
        alert("Данные введены неверно")
    }
    else {
        cookies().set('userJWT', jwt)
        // document.cookie = `userJWT=${jwt}`
        redirect('/personal')
    }
}


export default async function userData(identifier, password) {
    const data = await authUser(identifier, password)

    if(data == null) {
        userAddCookie(null)
    }
    else {
        userAddCookie(data.jwt)
    }
}