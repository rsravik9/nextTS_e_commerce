import React, { Fragment, ReactNode } from 'react'

type productsLayoutPageProps = {
    children: ReactNode
}

function ProductsLayoutPage({ children }: productsLayoutPageProps) {
    return (
        <Fragment>
            ProductsLayoutPage
            {children}
        </Fragment>
    )
}

export default ProductsLayoutPage