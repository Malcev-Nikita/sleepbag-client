'use client'

import { quitUser } from "@/store/user/user.slice"
import { useDispatch } from "react-redux"

export default function QuitButton() {
    const dispatch = useDispatch()

    function quit() {
        localStorage.removeItem('userData')
        localStorage.removeItem('userJWT')

        dispatch(quitUser())

        window.location.href = "/"
    }

    return (
        <div className="text-right mb-[67px]">
            <button className="text-[#F97316] text-[18px] font-normal" onClick={() => quit()}>
                Выйти из аккаунта
            </button>
        </div>
    )
}