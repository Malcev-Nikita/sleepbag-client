import Image from 'next/image'


export default function AboutUs({data, stats}) {
    return (
        <section id='aboutus' className='section_aboutus relative'>
            <div className='section_header container m-auto pb-[100px]'>
                <div className='header_line'></div>
                <h1>НЕМНОГО О НАШЕЙ <span>КОМПАНИИ!</span></h1>
            </div>

            <div className='aboutus_parts container m-auto'>
                <div className='aboutus_part1'>
                    <div className='part1_left w-[50%]'>
                        <h1>Органайзер для автомобилей всех классов с удобной системой быстрого снятия для перевозки грузов</h1>

                        <p>
                            В большой части автомобилей сиденья складываются таким образом, что не образуют ровной поверхности достаточной для организации полноценного отдыха.
                            <br/> <br/>Основной недостаток принципиальной схемы стационарных органайзеров заключается том, что его необходимо устанавливать раз и навсегда, хотя потребители пользуются спальным/погрузочным местом далеко не каждый день.
                            <br/> <br/><span>Суть Sleepbag</span> заключается в разработке простой конструкции укладывающейся в сложенном состоянии в размер 100Х100Х15 см, упакованной в сумку по аналогии с туристическими раскладушками, а в разобранном образующими ровную поверхность.
                        </p>
                    </div>

                    <div className='part1_right w-[50%]'>
                        <Image src='/images/aboutusphoto1.png' alt='' width={1650} height={700}/>
                    </div>
                </div>

                <div className='aboutus_part2'>
                    <div className='part2_left w-[50%]'>
                        <Image src='/images/aboutusphoto2.png' alt='' width={1150} height={500}/>
                    </div>

                    <div className='part2_right w-[50%]'>
                        <div className='part2_right_text'>
                            <h1>Органайзер можно:</h1>

                            <p>
                                -хранить на балконе, кладовке или в гараже<br/>
                                -перевозить в сложенном состоянии в упаковочном мешке не занимая много места<br/>
                                -установить в багажнике и разделить его по высоте на 2 части, что позволит в свою очередь грамотно разложить вещи и пользоваться без необходимости не вынимать их все<br/>
                                -сложив задние сиденья можно организовать спальное место для 2х взрослых<br/>
                                -то же самое использовать для перевозки любых грузов в том числе стройматериалов<br/>
                                -упаковав груз в чехол можно перевозить любые материалы без риска позврапать или запылить салон<br/>
                            </p>
                        </div>

                        <div className='ratings'>
                            {stats.data.map(stat => (
                                <div className='rating'>
                                    <p><span>{stat.attributes.Count}{stat.attributes.Postfix_Name}</span></p>
                                    <p>{stat.attributes.Name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
}
