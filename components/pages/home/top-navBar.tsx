import React, { Fragment } from 'react'
import Link from 'next/link'

function HomeTopNavBar() {
  return (
    <Fragment>
      <Link href="/products">Products</Link>
    </Fragment>
  )
}

export default HomeTopNavBar;