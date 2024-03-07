import React from "react";
import { Card, Form, Input, Button, Flex } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login-container">
      <Card className="login_card">
        <div className="login_container">
          <div className="login_image_container">
            <img src="/images/login.png" className="login_page_image" />
          </div>
          <div className="login_content">
            <img src="/images/login.webp" className="login_page_logo_image" />
            <h1>Welcome Back!</h1>
            <p>Login to continue</p>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>

              <p className="forgot_pass_text">Forgot your password ?</p>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
              <p className="">Don't have account ? Signup</p>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
