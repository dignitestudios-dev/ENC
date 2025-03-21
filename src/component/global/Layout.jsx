import React from 'react'
import Navber from './Navber'
import Footer from './Footer'

const Layout = ({ pages }) => {
    return (
        <div>
            <Navber />
            {pages}
            <Footer />
            
        </div>
    )
}

export default Layout
