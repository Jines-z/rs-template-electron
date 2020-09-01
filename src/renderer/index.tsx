import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import '@/styles/index.less'
import Pages from '@/pages'

class App extends React.Component {
    render(): IReactNode {
        return (
            <HashRouter>
                <Pages />
            </HashRouter>
        )
    }
}

render(<App />, document.getElementById('root'))

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}
