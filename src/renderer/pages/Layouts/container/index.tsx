import React, { Component } from 'react'
import Cookies from 'js-cookie'
import Left from '../components/Left'
import Right from '../components/Right'
import '../index.less'

class Layouts extends Component<IProps> {
    logout = (): void => {
        Cookies.remove('JSESSIONID', { path: '/' })
        Cookies.remove('userName', { path: '/' })
        this.props.history.replace('/login')
    }

    render(): IReactNode {
        return (
            <div className='Layouts_wrap w100p h100p clearfix'>
                <Left />
                <Right logout={this.logout} />
            </div>
        )
    }
}

export default Layouts
