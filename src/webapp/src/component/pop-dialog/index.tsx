import { Popconfirm } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import React from 'react';

interface DialogContent {
    title: string,
    onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void,
    children: React.ReactNode
}

class PopDialog extends React.Component<DialogContent> {
    render() {
        return (
            <Popconfirm
                title={this.props.title}
                icon={<SmileOutlined type="question-circle-o" style={{ color: 'red' }} />}
                onConfirm={this.props.onConfirm}>
                {this.props.children}
            </Popconfirm>
        );
    }
}

export default PopDialog;
