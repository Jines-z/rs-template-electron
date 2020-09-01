import React, { Component, ReactNode } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import router from '@/router/config'
const SubMenu = Menu.SubMenu

interface IKey {
    key: string;
}

class SideMenu extends Component<IProps> {
    state = {
        keys: ['/']
    }

    UNSAFE_componentWillMount(): void {
        this.selectKey()
    }

    UNSAFE_componentWillReceiveProps(nextProps: IProps): void {
        if (this.props.location.pathname != nextProps.location.pathname) {
            this.selectKey()
        }
    }

    selectKey = (): void => {
        const keys = []
        keys.push(this.props.history.location.pathname)
        this.setState({ keys: keys })
    }

    onSelect = ({ key }: IKey): void => {
        this.props.history.push(key)
    }

    titleNode = (item: any): ReactNode => {
        return (
            <span>
                <span className={'font mr-10 icon-' + item.icon}></span>
                <span>{item.name}</span>
            </span>
        )
    }

    render(): IReactNode {
        return (
            <div className='mt-5'>
                <Menu
                    mode='inline'
                    theme='dark'
                    onSelect={this.onSelect}
                    selectedKeys={this.state.keys}
                    defaultOpenKeys={['/' + this.state.keys[0].split('/')[1]]}
                >
                    {router.map(item =>
                        item.subRoute && item.subRoute.length > 0
                            ? (
                                <SubMenu key={item.path} title={this.titleNode(item)}>
                                    {item.subRoute.map(subItem =>
                                        <Menu.Item key={item.path + subItem.path}>
                                            <span>{subItem.name}</span>
                                        </Menu.Item>
                                    )}
                                </SubMenu>
                            )
                            : (
                                <Menu.Item key={item.path}>
                                    <span className={'font mr-10 icon-' + item.icon}></span>
                                    <span>{item.name}</span>
                                </Menu.Item>
                            )
                    )}
                </Menu>
            </div>
        )
    }
}

export default withRouter(SideMenu)
