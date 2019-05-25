import React from 'react';
import { Carousel } from 'antd';
import { Breadcrumb } from 'antd';
import './carousel.css';

export class Home extends React.Component{
    componentDidMount(){
      console.log(window.localStorage.getItem('username'));
    }
    render(){
        return (
            <Breadcrumb>
            <Breadcrumb.Item>欢迎进入后台管理系统</Breadcrumb.Item>
            
          </Breadcrumb>
        )
    }
}



