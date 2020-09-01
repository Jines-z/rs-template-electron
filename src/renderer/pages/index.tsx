import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Cookies from 'js-cookie'
import Layouts from './Layouts'
import Login from './Login'
import store from '@/store'

class Pages extends Component<IProps> {

    private readonly pathname: string

    constructor(props: IProps) {
        super(props)
        this.pathname = props.location.pathname
    }

    checkJSessionID = (): void => {
        if (this.props.location.pathname != '/login') {
            if (!Cookies.get('JSESSIONID')) {
                this.props.history.replace('/login')
            }
        } else {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home')
            }
        }
    }

    componentDidMount(): void {
        if (this.pathname == '/') {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home')
            } else {
                this.props.history.replace('/login')
            }
        } else {
            this.checkJSessionID()
        }
    }

    UNSAFE_componentWillReceiveProps(): void {
        this.checkJSessionID()
    }

    render(): IReactNode {
        return (
            <Provider { ...store }>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Layouts} />
                </Switch>
            </Provider>
        )
    }
}

export default withRouter(Pages)
