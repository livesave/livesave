import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import React from 'react';

interface DialogContent{
    title: string,
    onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void
}

class PopDialog extends React.Component<DialogContent> {
    render() {
        return (
            <Popconfirm
                title={this.props.title}
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={this.props.onConfirm}>
                {this.props.children}
            </Popconfirm>
        );
    }
}

export default PopDialog;
