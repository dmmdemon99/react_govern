import React from 'react';
import fetch from 'node-fetch';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './carousel.css';
class normalLogin extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    onSubmit(){
        const body="username="+this.props.form.getFieldValue('username')+"&&userpwd="+this.props.form.getFieldValue('userpwd')+"&&userclass="+this.props.form.getFieldValue('userclass')+"&&type=2"
        fetch("http://www.qhdlink-student.top/student/login.php",{
            method:'POST',
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body: body
        }).then((res)=>res.text()).then(text=>{
            if(text=='ok'){
                window.localStorage.setItem('username',this.props.form.getFieldValue('username'));
                window.localStorage.setItem('userpwd',this.props.form.getFieldValue('userpwd'));
                window.localStorage.setItem('userclass',this.props.form.getFieldValue('userclass'));
                this.props.history.push('/');
            }else{
                alert('请先注册');
            }
        }).catch((e)=>{alert(e)});

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-name">
            <h2>请登录后台管理系统</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('userpwd', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('userclass', {
                        rules: [{ required: true, message: 'Please input your class!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Class" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={e => {this.onSubmit(e)}}>
                       登录
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
            </div>
        );
    }
}
const Login = Form.create()(normalLogin);
export default Login
