import Link from 'next/link';

export default function FooterMenuItem({ element }) {
    return (
        <li key={element.id}>
            <Link href={element.attributes.link}>
                {element.attributes.name}
            </Link>
        </li>
    )
}