import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { inject, observer } from 'mobx-react'
const FormItem = Form.Item

@inject('Root')
@observer
class FromBox extends Component<IFromProps> {
    constructor(props: IFromProps) {
        super(props)
    }

    handleSubmit = (e: MouseEvent): void => {
        e.preventDefault()
        this.props.submit(this.props.form)
    }

    render(): IReactNode {
        const { getFieldDecorator } = this.props.form
        const { loading } = this.props.Root
        return (
            <Form className='w80p m-auto' onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '输入admin' }]
                    })(
                        <Input prefix={<span className='font icon-user f12 fw8 o-30 c-theme'></span>} placeholder='admin' />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码是123456' }]
                    })(
                        <Input prefix={<span className='font icon-mima f12 fw8 o-30 c-theme'></span>} type='password' placeholder='123456' />
                    )}
                </FormItem>
                <FormItem>
                    <Button className='w100p' type='primary' htmlType='submit' loading={loading}>
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create<IFromProps>()(FromBox)
