'use client'

import { useRouter } from "next/router";


export default function Preloader() {
    const router = useRouter();

    useEffect(() => {
        // Обработка начала загрузки
        router.events.on("routeChangeStart", () => {
            if(document.querySelector('.load').classList.contains('deactive')) {
                document.querySelector('.load').classList.remove('deactive')
            }
            document.querySelector('.load').style.display = 'block'
        });

        // Обработка окончания загрузки
        router.events.on("routeChangeComplete", () => {
            document.querySelector('.load').classList.add('deactive')

            setTimeout(() => {
                document.querySelector('.load').style.display = 'none'
            }, 500)
        });
    }, []);

    return (
        <div class="load">
            <hr/><hr/><hr/><hr/>
        </div>
    )
}