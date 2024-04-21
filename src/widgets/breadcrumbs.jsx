import Link from "next/link";

export default function Breadcrumbs({ breadcrumbs }) {
    return (
        <nav className="breadcrumb mobile_none pt-[13vh]" aria-label="breadcrumbs">
            <ol className="flex">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        {
                            breadcrumb.href ? (
                                <Link href={breadcrumb.href} className="text-[#000] opacity-70">{breadcrumb.label}</Link>
                            ) : (
                                <span className="separator">{breadcrumb.label}</span>
                            )
                        }

                        {
                            index < breadcrumbs.length - 1 && <span className="separator"> / </span>
                        }
                    </li>
                ))}
            </ol>
        </nav>
    )
}