'use client'

import { YMaps, Map } from '@pbe/react-yandex-maps';


export default function Ymap() {
    return (
        <YMaps >
            <div>
                <Map className='w-[100%] h-[696px] my-[90px]' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
        </YMaps>
    )
}