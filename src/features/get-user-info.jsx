'use client'

import { userInfo } from "@/services/personal/personal"
import { setUserData, setUserJwt } from "@/store/user/user.slice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function GetUserInfo() {
    const dispatch = useDispatch()
    const userJwt = useSelector(state => state.user.userJwt)
    const userData = useSelector(state => state.user.userData)

    useEffect(() => {
        const jwt = localStorage.getItem('userJWT');
    
        if (jwt && !userJwt) {
            dispatch(setUserJwt(jwt));
        } 
        if (jwt && !userData) {
            getInfo(jwt);
        }
    }, [userJwt, userData]);

    async function getInfo(jwt) {
        try {
            const data = await userInfo(jwt)

            if (data) {
                localStorage.setItem('userData', JSON.stringify(data))
                dispatch(setUserData(data))
            }
        } catch (error) {
            console.error('Error fetching user info:', error.message)
        }
    }

    return null
}