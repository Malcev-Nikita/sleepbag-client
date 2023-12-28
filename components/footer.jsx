import Image from 'next/image'


export default function Footer() {
    return (
        <footer>
            <div className='footer_left'><a href="#">© 2007 - 2023 Все права защищены</a></div>
            <div className='footer_right'>
                <a href="#">Политика конфиденциальности</a>
                <a href="#">Разработано командой  Whynot_Team</a>
            </div>
        </footer>
    );
}