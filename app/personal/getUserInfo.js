'use client'

import { userInfo } from "@/services/personal/personal"
import React, { useEffect } from "react"

export default function GetUserInfo() {
    useEffect(() => {
        getInfo()
    })

    async function getInfo() {
        const jwt = localStorage.getItem('userJWT')

        if(jwt) {
            const data = await userInfo(jwt)

            if(data) {
                localStorage.setItem('userData', JSON.stringify(data))
            }
        }
    }

    return (
       ''
    )
}