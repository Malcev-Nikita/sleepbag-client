import Image from 'next/image'


export default function AboutProduction({data}) {
    return (
        <section id='section_aboutproduction'>
            <div className='section_header container m-auto'>
                <div className='header_line'></div>
                <h1>О ПРОДУКЦИИ</h1>
            </div>

            <div className='abprod container m-auto'>
                <div className='abprod_left w-[50%]'>
                    <h1>1.</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    <br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                </div>

                <div className='abprod_right'>
                    <Image src='/images/abprod.png' alt='' width={643} height={510}></Image>
                </div>
            </div>
            <div className='abprod container m-auto'>
                <div className='abprod_right'>
                    <Image src='/images/abprod2.png' alt='' width={643} height={510}></Image>
                </div>

                <div className='abprod_left w-[50%]'>
                    <h1>2.</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    <br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                </div>
            </div>

            <div className='abprod container m-auto'>
                <div className='abprod_left w-[50%]'>
                    <h1>3.</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    <br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                </div>

                <div className='abprod_right'>
                    <Image src='/images/adprod3.png' alt='' width={643} height={510}></Image>
                </div>
            </div>
        </section>
    )
}
