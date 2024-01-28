import Image from 'next/image'


export default function CatalogObject() {
    return (
        <div className='catalog_object'>
            <div className='object_photo'>
              <Image src='/images/catalog_photo.png' alt='' width={364} height={320}></Image>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M1 8.625C1 4.04167 4.64583 3 6.72917 3C9.33333 3 11.4167 5.08333 12.4583 6.64583C13.5 5.08333 15.5833 3 18.1875 3C20.2708 3 23.9167 4.04167 23.9167 8.625C23.9167 15.5 12.4583 21.75 12.4583 21.75C12.4583 21.75 1 15.5 1 8.625Z" stroke="white" stroke-width="1.5"/>
              </svg>
            </div>
            <div className='object_desc'>
              <h1>TLC 200 ДВА ВЫДВИЖНЫХ + ЗАМКИ</h1>
              <p>Органайзер для TLC 200</p>
              <p>В наличии - 2 шт.</p>
              <div className='object_price'>
                <p>30 000</p>
                <p>₽</p>
              </div>
              <a href='#'><button className='object_button1'>Подробнее</button></a>
            </div>
          </div>
    );
}