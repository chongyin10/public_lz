import React, { Component } from "react";
import { Table, Tag, Space, Button, Divider, Popconfirm } from 'antd';
import { PoweroffOutlined, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

/**
 * 删除按钮
 * @param delBtn 是否显示按钮
 * @param type 按钮类型
 * @param title 按钮名称
 * @param onDelFun 按钮事件
 */
export function delBtnAction(delBtn: boolean, type: string = 'delete', title: string, onDelFun: () => void) {
    if (type === 'delete' && delBtn) {
        return <Popconfirm
            title="是否要删除?"
            onConfirm={onDelFun}
            okText="确认"
            cancelText="取消"
        >
            <Button size='small' type='ghost' icon={<DeleteTwoTone />}>{title}</Button>
        </Popconfirm>
    } else {
        return ""
    }
}


export function addBtnAction(addBtn: boolean) {
    return ''
}

/**
 * 修改按钮
 * @param updataBtn 是否显示按钮
 * @param type 按钮类型
 * @param title 按钮名称
 * @param onUpdataFun 按钮事件
 */
export function updateBtnAction(updataBtn: boolean, type: string = 'update', title: string, onUpdataFun: () => void) {
    if ( type === 'update' && updataBtn ) {
        return <Button size='small' type='ghost' icon={<EditTwoTone />} onClick={onUpdataFun}>{title}</Button>
    } else  {
        return ""
    }
    
}
