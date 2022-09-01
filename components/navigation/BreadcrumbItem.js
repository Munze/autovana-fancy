import Link from 'next/link'
import React from 'react'

export const BreadcrumbItem = ({children, href,...props}) => {

  return (
    <li {...props}>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    </li>
  )
}
