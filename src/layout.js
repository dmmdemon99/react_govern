import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import { Avatar } from 'antd';

import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import './index.css';
import React from 'react';

import ReactDOM from 'react-dom' ;   

export default class Public extends React.Component{
    render(){
      return(
   <Layout>
    <Header className="header">
      <div className="logo" >后台管理系统</div>
      <div className="logIn">    
      <Avatar style={{ backgroundColor: '#87d068', marginRight:'30px'}} shape="square" size='small' icon="user" />
 
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' , display:'inline-block'}}
         >
            <Menu.Item key="1"><Link to='login'>{window.localStorage.getItem('username')? window.localStorage.getItem('username'):'登录'}</Link></Menu.Item>

        </Menu>
      </div>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0', background: '#eee' }}>
        <Sider width={200} style={{ background: '#eee' }}>
          <Menu
            mode="inline"
             defaultSelectedKeys={['1']}
             defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="1"><Link to='/banner'><span><Icon type="picture" /> </span>查看banner</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/news'><span><Icon type="eye" /></span>查看新闻</Link></Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="laptop" />产品管理</span>}>
              <Menu.Item key="3"><Link to='/product'>产品查询</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/product'>产品添加</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/product'>产品修改</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/product'>产品删除</Link></Menu.Item>

            </SubMenu>
            
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {this.props.children}
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center',background: '#aaa'  }}>
       ©2018 Created by November Spring
    </Footer>
  </Layout>
)
}
}
