import React, { FC } from 'react'
import { Spin, Icon } from 'antd'

interface ILoading {
    loading: boolean;
}

const Loading: FC<ILoading> = ({ loading, children }) => {
    return (
        <Spin
            tip='LOADING'
            wrapperClassName='h100p'
            spinning={loading}
            indicator={<Icon type='loading' style={{ fontSize: 24 }} spin />}
        >
            {children}
        </Spin>
    )
}

export default Loading
