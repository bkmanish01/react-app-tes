import { Divider, Layout } from 'antd';
import React from 'react'

const {Header, Footer, Sider, Content} = Layout;
const LayoutExample = () => {
  return (
    <div>
      <Divider orientation='center'>Layout Example</Divider>
      <Layout>
          <Header style={{backgroundColor:'orange'}}>Header</Header>
          <Content style={{backgroundColor:'green'}}>Content</Content>
          <Footer style={{backgroundColor:'blue'}}>Footer</Footer>
      </Layout>
      <div>
          <Layout>
              <Header>Header</Header>
              <Layout>
                  <Sider>Sider</Sider>
                  <Content>Content</Content>
              </Layout>
              <Footer>Footer</Footer>
          </Layout>
      </div>
    </div>
  )
}

export default LayoutExample;

