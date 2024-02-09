'use client'

import { useRef } from "react"
import { Provider } from "react-redux"
import { store } from "@/lib/store"

export default function StoreProvider({children}) {
    // const storeref = useRef()

    // if(!storeref.current) {
    //     storeref.current = store()
    // }

    return (
        <Provider store={store}>{children}</Provider>
    )
}