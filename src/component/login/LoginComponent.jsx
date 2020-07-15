import React from "react";
import './LoginComp.css'
import {Button, Card, Checkbox, Col, Form, Input, Layout, Row} from 'antd';

import {LockOutlined, UserOutlined} from '@ant-design/icons';

const {useState} = React
const NormalLoginForm = () => {
    const [login, setLogin] = useState(false)

    const onFinish = (values) => {
        console.log('Received values of form: ', values)
        if (values.username === "hanif" && values.password==="123456"){
            console.log("LOgin Succes")
            setLogin(true)
            localStorage.setItem("username","Hanif")
            console.log("Login Status",login)
            let username = localStorage.getItem("username");
            console.log("Username",username)
        }else {
            console.log("Gagal")
        }
    };


    const {Content} = Layout
    const btnStyle = {
        minWidth : "100vh%",
    }
    return (
        <Layout>
            <Content style={{background : "#34d5eb"}}>
                <Row justify="center" align="middle" style={{minHeight: "100vh"}}>
                    <Col sm={10} lg={6} xs={18}>
                        <Card>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    Or <a href="">register now!</a>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Content>

        </Layout>

    );
};

export default NormalLoginForm