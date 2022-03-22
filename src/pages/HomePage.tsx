import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import WebsiteLayout from './layouts/WebsiteLayout'

type Props = {}

function HomePage({}: Props) {
    return (
        <div>
            Website
            <Routes >
                <Route path='/' element={<WebsiteLayout/>}>
                    <Route index element={<h1>HomePage</h1>} />
                    <Route path='products' element={<h1>Products Page</h1>} />
                </Route>
                <Route path='admin' element={<AdminLayout/>}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path='dashboard' element={<h1>Dashboard Page</h1>} />
                </Route>
            </Routes>
        </div>
    )
}

export default HomePage