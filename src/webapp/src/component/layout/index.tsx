import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './layout.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface DialogContent {
    children: React.ReactNode
}

class RootLayout extends React.Component<DialogContent> {
    render() {
        return (
            <Layout className="all-layout">
                <Header className="header small-header">
                    <h3 className="logo-text">Bililive-go</h3>
                </Header>
                <Layout>
                    <Router>
                        <Sider className="side-bar" width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <SmileOutlined type="monitor" />
                                            LiveClient
                                        </span>
                                    }
                                >
                                    <Menu.Item key="1"><Link to="/">监控列表</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/liveInfo">系统状态</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout className="content-padding">
                            <Content
                                className="inside-content-padding"
                                style={{
                                    background: '#fff',
                                    margin: 0,
                                    minHeight: 280,
                                }}>
                                {this.props.children}
                            </Content>
                        </Layout>
                    </Router>
                </Layout>
            </Layout>
        )
    }
}

export default RootLayout;
