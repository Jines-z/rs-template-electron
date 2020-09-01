import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { message } from 'antd'
import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie'
import TitleBar from '@/components/TitleBar'
import service from '@/service'
import FormBox from '../components/FormBox'
import '../index.less'

@inject('Root')
@observer
class Login extends Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    submit = (form: IFromProps): void => {
        const { Root, history } = this.props
        const { updateName, loading } = Root
        form.validateFields(async(err: any, values: any) => {
            if (!err && !loading) {
                const { userName, password } = values
                const param = {
                    userName,
                    password
                }
                const result = await service.login(param)
                if (result.data.success) {
                    const message = `M&${userName}&${password}`
                    const key = 'react_starter'
                    const session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, key))
                    Cookies.set('JSESSIONID', session, { expires: 1, path: '/' })
                    Cookies.set('userName', userName, { expires: 1, path: '/' })
                    updateName(userName)
                    history.push('/home')
                } else {
                    message.error('账号：admin ； 密码：123456')
                }
            }
        })
    }

    render(): IReactNode {
        return (
            <div className='Login_wrap w100p h100p clearfix'>
                <TitleBar />
                <div className='form bgc-white tc pt-50 P_auto'>
                    <span className='font icon-react'></span>
                    <FormBox submit={this.submit} />
                </div>
            </div>
        )
    }
}

export default Login
