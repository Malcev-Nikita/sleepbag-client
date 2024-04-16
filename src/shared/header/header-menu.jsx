import { getIndexMenus } from '@/services/header/header';
import HeaderMenuItem from '@/entities/header/header-menu-item';


export default async function HeaderMenu() {
    const index_menu = await getIndexMenus()

    return (
        <div className='header_main_links flex gap-[35px]'>
            {index_menu.data.map(element => <HeaderMenuItem key={ element.id } element={ element } />)}
        </div>
    )
}