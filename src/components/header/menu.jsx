import Link from 'next/link';
import { getIndexMenus } from '@/services/header/header';


export default async function HeaderMenu() {
    const index_menu = await getIndexMenus()

    return (
        <div className='header_main_links flex gap-[35px]'>
            {index_menu.data.map(element => (
                <Link key={element.id} href={element.attributes.link} className='text-[#f4f4f4] opacity-80 text-[18px]'>{element.attributes.name}</Link>
            ))}
        </div>
    )
}