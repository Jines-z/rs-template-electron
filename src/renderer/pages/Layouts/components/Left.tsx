import React, { FC } from 'react'
import SideMenu from '@/components/SideMenu'

const Left: FC = () => {
    return (
        <div className='left fl bgc-theme'>
            <div className='logo tc dtc v-mid h60'>
                <img className='w85p ml-10' src='https://jines-z.github.io/images/rs-admin-cli-white.png' />
            </div>
            <SideMenu />
        </div>
    )
}

export default Left
