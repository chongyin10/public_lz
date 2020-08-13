import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

    state = {
        btn: [
            {
                key: 1,
                text: '页面主操作 Normal',
                size: 'default',
                type: 'primary'
            },
            {
                key: 2,
                text: '页面主操作 Loading',
                size: 'default',
                type: 'primary',
                loading: true,
            },
            {
                key: 3,
                text: '页面主操作 Disabled',
                size: 'default',
                type: 'primary',
                disabled: true,
            },
            {
                key: 4,
                text: '页面次要操作 Normal',
                size: 'default',
                type: 'default'
            },
            {
                key: 5,
                text: '页面次要操作 Disabled',
                size: 'default',
                type: 'default',
                disabled: true,
            },
            {
                key: 6,
                text: '警告类操作 Normal',
                size: 'default',
                type: 'warn'
            },
            {
                key: 7,
                text: '警告类操作 Disabled',
                size: 'default',
                type: 'warn',
                disabled: true,
            }
        ]
    }

    render() {
        return (
            <View className='container'>
                {this.state.btn.map((item) => {
                    return (
                        <Button
                            key={item.key}
                            size={item.size || ''}
                            type={item.type ? item.type : ''}
                            loading={item.loading ? item.loading : false}
                            disabled={item.disabled ? item.disabled : false}
                        >
                            {item.text}
                        </Button>
                    )
                })}
                <Button className='btn-max-w' plain type='primary'>按钮</Button>
                <Button className='btn-max-w' plain type='primary' disabled>不可点击的按钮</Button>
                <Button className='btn-max-w' plain >按钮</Button>
                <Button className='btn-max-w' plain disabled >按钮</Button>
                <Button size='mini' type='primary'>按钮</Button>
                <Button size='mini' >按钮</Button>
                <Button size='mini' type='warn'>按钮</Button>
            </View>
        )
    }
}
