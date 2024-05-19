import React, { ReactNode } from 'react'

type profileLayoutProps = {
    children: ReactNode
}

function ProfileLayout({ children }: profileLayoutProps) {
    return (
        <div>
            <h1>Profile Page Heder</h1>
            {children}
            <h1>Profile Page Footer</h1>

        </div>
    )
}

export default ProfileLayout