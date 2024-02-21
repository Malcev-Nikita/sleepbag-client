import { getIndexMenus } from '@/services/header/header';


export default async function HeaderMenu() {
    const index_menu = await getIndexMenus()

    return (
        <div className='flex gap-[35px]'>
            {index_menu.data.map(element => (
                <a href={element.attributes.link} className='text-[#f4f4f4] opacity-80 text-[18px]'>{element.attributes.name}</a>
            ))}
        </div>
    )
}