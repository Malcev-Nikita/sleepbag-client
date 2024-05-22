'use client'

import { useState } from "react"


export default function CatalogSlugTabs({detailDescription, otherInfo}) {
    const [tabName, setTabName] = useState('DETAIL_DESCRIPTION')

    return (
        <section className='next_info mobile_none font-[Manrope] mb-[50px]'>
            <hr className='next_info_hr hidden mt-[20px] mb-[15px] h-[2px] bg-[#000] opacity-40'/>

            <div className='next_info_h3 flex flex-row text-[20px] gap-[60px]'>
                {tabName == 'DETAIL_DESCRIPTION' ? (
                    <button className='text-[#f97316]' onClick={() => setTabName('DETAIL_DESCRIPTION')} >
                        ОПИСАНИЕ
                    </button>
                ) : (
                    <button className='' onClick={() => setTabName('DETAIL_DESCRIPTION')} >
                        ОПИСАНИЕ
                    </button>
                )}

                {tabName == 'OTHER_INFO' ? (
                    <button className='text-[#f97316]' onClick={() => setTabName('OTHER_INFO')} >
                        ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ
                    </button>
                ) : (
                    <button className='' onClick={() => setTabName('OTHER_INFO')} >
                        ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ
                    </button>
                )}
            </div>

            <hr className='next_info_hr2 mt-[20px] mb-[15px] h-[2px] bg-[#000] opacity-40'/>

            {tabName == 'DETAIL_DESCRIPTION' ? (
                <div dangerouslySetInnerHTML={detailDescription} />
            ) : ('')}

            {tabName == 'OTHER_INFO' ? (
                <div dangerouslySetInnerHTML={otherInfo} />
            ) : ('')}
        </section>
    )
}