import Link from 'next/link';

export default function HeaderMenuItem({ element }) {
    return (
        <Link key={element.id} href={element.attributes.link} className='text-[#f4f4f4] opacity-80 text-[18px]'>
            {element.attributes.name}
        </Link>
    )
}