import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

function WebsiteLayout({}: Props) {
    return (
        <div>WebsiteLayout
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default WebsiteLayout