import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Tooltip } from 'antd'
import Cookies from 'js-cookie'
import Loading from '@/components/Loading'
import Router from '@/router'

@inject('Root')
@observer
class Right extends Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    UNSAFE_componentWillMount(): void {
        const { userInfo, updateName } = this.props.Root
        if (userInfo.name == '') {
            updateName(Cookies.get('userName'))
        }
    }

    tipNode = (): IReactNode => {
        return (
            <span className='f14 cur-p' onClick={this.logout}>
                退出
            </span>
        )
    }

    logout = (): void => {
        this.props.logout()
    }

    render(): IReactNode {
        const { userInfo, loading } = this.props.Root
        const { name } = userInfo
        return (
            <div className='right ov-h'>
                <div className='header h60 relative clear clearfix'>
                    <div className='user f14 h100p fr'>
                        <span className='font icon-touxiang mr-5'></span>
                        <Tooltip title={this.tipNode()}>
                            <span className='cur-p'>{name}</span>
                        </Tooltip>
                    </div>
                </div>
                <div className='routeWrap'>
                    <Loading loading={loading}>
                        <Router />
                    </Loading>
                </div>
            </div>
        )
    }
}

export default withRouter(Right)
