'use client'

import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Ymap({ x_position, y_position, zoom }) {
    return (
        <YMaps>
            <div>
                <Map className={`w-[100% h-[650px] mt-[60px]`} defaultState={{ center: [x_position, y_position], zoom: zoom }} />
            </div>
        </YMaps>
    )
}