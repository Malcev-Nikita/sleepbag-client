'use client'

import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Ymap({ width, height, x_position, y_position, zoom }) {
    return (
        <YMaps>
            <div>
                <Map className={`w-[${width}] h-[${height}]`} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
        </YMaps>
    )
}