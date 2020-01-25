import React from 'react'

import Header from '../Header/Header'
import {Container} from './Layout.styles'

interface LayoutProps {
    children: any
}

const Layout = ({children}:LayoutProps) => (
        <Container>
            <Header />
            {children}
        </Container>
    )


export default Layout