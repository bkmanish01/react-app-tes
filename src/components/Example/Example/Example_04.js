import React from 'react';
import './example.css';
import { Layout, Menu, Breadcrumb, Upload, Button, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  return (
    <div>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
           <Upload>
               <Button>
                    <UploadOutlined />Click to upload
               </Button>
           </Upload>
            <Popconfirm title="Are you sure?" okText="Yes" cancelText="No">
                <Button>Confirm</Button>
            </Popconfirm>
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    </div>
  );
};

export default AppLayout;
