import React, { FC } from 'react'
import { ipcRenderer } from 'electron'
import './index.less'

const min = (): void => {
    ipcRenderer.send('min')
}
const max = (): void => {
    ipcRenderer.send('max')
}
const close = (): void => {
    ipcRenderer.send('close')
}

const TitleBar: FC = () => {
    return (
        <div className='TitleBar w100p h30 fixed left-0 top-0 clearfix'>
            <div className='drop w50p h100p fl df items-center'>
                <img className='h60p ml-10' src='https://jines-z.github.io/images/rs-admin-cli.png' />
            </div>
            <div className='tools w50p h100p fl df items-center justify-end'>
                <div
                    className='w50 h100p df items-center justify-center'
                    onClick={min}
                >
                    <span className='f12 iconfont icon-zuixiaohua'></span>
                </div>
                <div
                    className='w50 h100p df items-center justify-center'
                    onClick={max}
                >
                    <span className='f12 iconfont icon-zuidahua'></span>
                </div>
                <div
                    className='w50 h100p df items-center justify-center'
                    onClick={close}
                >
                    <span className='f12 iconfont icon-guanbi'></span>
                </div>
            </div>
        </div>
    )
}

export default TitleBar
