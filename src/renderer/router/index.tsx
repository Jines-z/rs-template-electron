import React, { FC } from 'react'
import { Route } from 'react-router-dom'
import config from './config'

// @ts-ignore
const Router: FC = () => {
    return (
        config.map(item =>
            item.subRoute && item.subRoute.length > 0
                ? (
                    item.subRoute.map(subItem =>
                        <Route
                            key={`${(item.path || '') + subItem.path}`}
                            path={`${(item.path || '') + subItem.path}`}
                            component={subItem.component}
                            exact
                        />
                    )
                )
                : (
                    <Route key={item.path} path={item.path} component={item.component} exact />
                )
        )
    )
}

export default Router
