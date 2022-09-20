import React from 'react'
import {Outlet} from 'react-router-dom'

import NavBar from '../../components/Clients/Navbar/NavBar'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <NavBar/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default WebsiteLayout