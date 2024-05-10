export function Breadcrumbs({ breadcrumbs }) {
    return (
        <nav className="breadcrumb mobile_none pt-[135px]" aria-label="breadcrumbs">
            <ol className="flex">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        {
                            breadcrumb.href ? (
                                <a href={breadcrumb.href} className="text-[#000] opacity-70">{breadcrumb.label}</a>
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

export function BreadcrumbsMobile({ breadcrumbs }) {
    return (
        <nav className="breadcrumb mobile_block mobile_block_link pt-[100px]" aria-label="breadcrumbs">
            <ol className="flex">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        {
                            breadcrumb.href ? (
                                <a href={breadcrumb.href} className="text-[#000] opacity-70">{breadcrumb.label}</a>
                            ) : (
                                <span className="separator">{breadcrumb.label}</span>
                            )
                        }

                        {
                            index < breadcrumbs.length - 1 && <span className="separator">/</span>
                        }
                    </li>
                ))}
            </ol>
        </nav>
    )
}