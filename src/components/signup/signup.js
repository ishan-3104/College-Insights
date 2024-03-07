import React from "react";
import "./Signup.css";
import { Card } from "antd";
import { Form, Input, Checkbox, Button, DatePicker } from "antd";

const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="login-container">
        <Card className="login_card">
          <div className="login_container">
            <div className="login_image_container">
              <img src="/images/login.png" className="login_page_image" />
            </div>
            <div className="login_content">
              {/* <h1>Welcome Back!</h1>
              <p>Login to continue</p> */}
              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                layout="vertical"
                style={{ maxWidth: 300, margin: "auto" }}
              >
                <h1 style={{ textAlign: "center", color: "#7E33E0" }}>
                  Sign Up
                </h1>
                <br />
                <br />
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="email" />
                </Form.Item>

                <Form.Item
                  name="dateOfBirth"
                  rules={[
                    {
                      required: true,
                      message: "Please input your date of birth!",
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="password" />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="enter password again" />
                </Form.Item>

                <Form.Item name="studying" valuePropName="checked">
                  <Checkbox>studying currently?</Checkbox>
                </Form.Item>

                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) =>
                    prevValues.studying !== currentValues.studying
                  }
                >
                  {({ getFieldValue }) => {
                    return getFieldValue("studying") ? (
                      <>
                        <Form.Item
                          name="college"
                          rules={[
                            {
                              required: true,
                              message: "Please input your college!",
                            },
                          ]}
                        >
                          <Input placeholder="college" />
                        </Form.Item>

                        <Form.Item
                          name="major"
                          rules={[
                            {
                              required: true,
                              message: "Please input your major!",
                            },
                          ]}
                        >
                          <Input placeholder="major" />
                        </Form.Item>
                      </>
                    ) : null;
                  }}
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Card>
      </div>
      {/* <div className="Signup_page">
      <Card>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          layout="vertical"
          style={{ maxWidth: 300, margin: "auto" }}
        >
          <h1 style={{ textAlign: "center" }}>Sign Up</h1>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="email" />
          </Form.Item>

          <Form.Item
            name="dateOfBirth"
            rules={[
              { required: true, message: "Please input your date of birth!" },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="enter password again" />
          </Form.Item>

          <Form.Item name="studying" valuePropName="checked">
            <Checkbox>studying currently?</Checkbox>
          </Form.Item>

          {form.getFieldValue("studying") && (
            <>
              <Form.Item
                name="college"
                rules={[
                  { required: true, message: "Please input your college!" },
                ]}
              >
                <Input placeholder="college" />
              </Form.Item>

              <Form.Item
                name="major"
                rules={[
                  { required: true, message: "Please input your major!" },
                ]}
              >
                <Input placeholder="major" />
              </Form.Item>
            </>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div> */}
    </>
  );
};

export default Signup;
