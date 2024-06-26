'use client'

import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import { AddFavoritesItem } from '@/features/like';
import BurgerCart from './burger-cart';


export default function Favorites() {
    const favoritesItems = useSelector(state => state.favorites.items)
    const productsItems = useSelector(state => state.products.items)
    const dispatch = useDispatch()


    if(favoritesItems != null && productsItems != null && !favoritesItems.error) {
        return (
            <div className="favorite content px-[52px]">
                {favoritesItems.favorites.map(favorite => (
                    <div className="favorite_product flex justify-between m-auto w-[100%]" key={favorite.id}>
                        <div className="favorite_product_desc w-[80%]">
                            <div className="w-[50%]">
                                {productsItems.data.map(product => {
                                    if(product.id == favorite.id) {
                                        return (
                                            <Image key={product.id} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + product.attributes.image.data[0].attributes.url} alt='Изображение товара' width={364} height={320}/>
                                        )
                                    }
                                })}
                            </div>
    
                            <div className="product_desription w-[100%]">
                                <h3 className='text-white'>{favorite.name}</h3>
                                <p>В наличии - {favorite.count} шт.</p>
                            </div>
                        </div>
    
                        <div className="w-[20%] flex items-end flex-col">
                            <div className="text-[#F97316] text-[18px] font-semibold font-[Manrope]">{favorite.price} ₽</div>
    
                            <div className="flex mt-[35px] gap-[15px]">
                                <BurgerCart product={ favorite } />
    
                                <button id={favorite.id} className="favorite_svgs" onClick={() => AddFavoritesItem(favorite.id, productsItems, dispatch)}>
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.6" d="M13.2217 13.3116L12.4754 13.2374L13.2217 13.3116ZM3.5791 13.3116L2.83278 13.3858L3.5791 13.3116ZM5.16216 16.7547L4.8403 17.4321H4.8403L5.16216 16.7547ZM4.06751 15.7584L3.42365 16.143L3.42365 16.143L4.06751 15.7584ZM12.7333 15.7584L13.3771 16.143L13.3771 16.143L12.7333 15.7584ZM11.6386 16.7547L11.9605 17.4321H11.9605L11.6386 16.7547ZM1.40039 3.77C0.986177 3.77 0.650391 4.10579 0.650391 4.52C0.650391 4.93421 0.986177 5.27 1.40039 5.27V3.77ZM15.4004 5.27C15.8146 5.27 16.1504 4.93421 16.1504 4.52C16.1504 4.10579 15.8146 3.77 15.4004 3.77V5.27ZM9.53086 1.06542L9.72601 0.341256L9.53086 1.06542ZM10.8808 2.42307L11.6055 2.22998V2.22998L10.8808 2.42307ZM7.26992 1.06542L7.46507 1.78959L7.26992 1.06542ZM5.91999 2.42307L6.64471 2.61615V2.61615L5.91999 2.42307ZM11.374 7.47421C11.415 7.06203 11.1141 6.69466 10.7019 6.65368C10.2897 6.6127 9.92233 6.91361 9.88134 7.32579L11.374 7.47421ZM9.24498 13.7258C9.204 14.138 9.50491 14.5053 9.91709 14.5463C10.3293 14.5873 10.6966 14.2864 10.7376 13.8742L9.24498 13.7258ZM6.91944 7.32579C6.87845 6.91361 6.51109 6.6127 6.09891 6.65368C5.68673 6.69466 5.38581 7.06203 5.4268 7.47421L6.91944 7.32579ZM6.06316 13.8742C6.10415 14.2864 6.47151 14.5873 6.88369 14.5463C7.29587 14.5053 7.59679 14.138 7.5558 13.7258L6.06316 13.8742ZM9.16917 16.25H7.63161V17.75H9.16917V16.25ZM7.63161 16.25C6.96877 16.25 6.51486 16.2495 6.16098 16.2216C5.81646 16.1946 5.62629 16.1449 5.48401 16.0773L4.8403 17.4321C5.21431 17.6098 5.60781 17.6828 6.04343 17.717C6.46968 17.7505 6.99235 17.75 7.63161 17.75V16.25ZM2.83278 13.3858C2.89641 14.0257 2.94783 14.5482 3.02329 14.9709C3.10036 15.4025 3.21135 15.7877 3.42365 16.143L4.71137 15.3738C4.6296 15.2369 4.56117 15.0502 4.49994 14.7072C4.4371 14.3552 4.39135 13.9005 4.32542 13.2374L2.83278 13.3858ZM5.48402 16.0773C5.16365 15.9251 4.8946 15.6805 4.71137 15.3738L3.42365 16.143C3.75843 16.7034 4.2512 17.1522 4.8403 17.4321L5.48402 16.0773ZM12.4754 13.2374C12.4094 13.9005 12.3637 14.3552 12.3008 14.7072C12.2396 15.0502 12.1712 15.2369 12.0894 15.3738L13.3771 16.143C13.5894 15.7877 13.7004 15.4025 13.7775 14.9709C13.8529 14.5482 13.9044 14.0257 13.968 13.3858L12.4754 13.2374ZM9.16917 17.75C9.80843 17.75 10.3311 17.7505 10.7574 17.717C11.193 17.6828 11.5865 17.6098 11.9605 17.4321L11.3168 16.0773C11.1745 16.1449 10.9843 16.1946 10.6398 16.2216C10.2859 16.2495 9.83201 16.25 9.16917 16.25V17.75ZM12.0894 15.3738C11.9062 15.6805 11.6371 15.9251 11.3168 16.0773L11.9605 17.4321C12.5496 17.1522 13.0423 16.7034 13.3771 16.143L12.0894 15.3738ZM10.1958 3.56V4.2H11.6958V3.56H10.1958ZM6.60494 4.2V3.56H5.10494V4.2H6.60494ZM8.40039 1.75C9.04073 1.75 9.21297 1.75651 9.33571 1.78959L9.72601 0.341256C9.36321 0.243489 8.94365 0.25 8.40039 0.25V1.75ZM11.6958 3.56C11.6958 3.01285 11.7022 2.59295 11.6055 2.22998L10.1561 2.61615C10.1895 2.7415 10.1958 2.91678 10.1958 3.56H11.6958ZM9.33571 1.78959C9.73422 1.89698 10.0481 2.2109 10.1561 2.61615L11.6055 2.22998C11.3604 1.31008 10.6451 0.58894 9.72601 0.341256L9.33571 1.78959ZM8.40039 0.25C7.85713 0.25 7.43757 0.243489 7.07477 0.341256L7.46507 1.78959C7.58781 1.75651 7.76005 1.75 8.40039 1.75V0.25ZM6.60494 3.56C6.60494 2.91678 6.61131 2.7415 6.64471 2.61615L5.19527 2.22998C5.09856 2.59295 5.10494 3.01285 5.10494 3.56H6.60494ZM7.07477 0.341256C6.15565 0.58894 5.44035 1.31008 5.19527 2.22998L6.64471 2.61615C6.75268 2.2109 7.06656 1.89698 7.46507 1.78959L7.07477 0.341256ZM9.88134 7.32579L9.24498 13.7258L10.7376 13.8742L11.374 7.47421L9.88134 7.32579ZM5.4268 7.47421L6.06316 13.8742L7.5558 13.7258L6.91944 7.32579L5.4268 7.47421ZM14.0958 5.27H15.4004V3.77H14.0958V5.27ZM13.3495 4.44579L12.4754 13.2374L13.968 13.3858L14.8422 4.59421L13.3495 4.44579ZM10.9458 5.27H14.0958V3.77H10.9458V5.27ZM10.1958 4.2V4.52H11.6958V4.2H10.1958ZM5.85494 5.27H10.9458V3.77H5.85494V5.27ZM5.10494 4.2V4.52H6.60494V4.2H5.10494ZM1.40039 5.27H2.70494V3.77H1.40039V5.27ZM2.70494 5.27H5.85494V3.77H2.70494V5.27ZM4.32542 13.2374L3.45126 4.44579L1.95862 4.59421L2.83278 13.3858L4.32542 13.2374Z" fill="#F4F4F4"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}