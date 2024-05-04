import Link from 'next/link';

export default function FooterMenuItem({ element }) {
    return (
        <li key={element.id}>
            <a href={element.attributes.link}>
                {element.attributes.name}
            </a>
        </li>
    )
}