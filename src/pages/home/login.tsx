import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
const LoginContainer = styled.div`
  width: 600px;
  margin: 20px auto;
`;
const TitleContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;
const ButtonContainer = styled(Button)`
  width: 100%;
`;
interface FormLabel {
  username: String;
  passwrod: String;
}
const Login: React.FC<any> = () => {
  const onFinish = (value: FormLabel) => {
    console.log('success', value);
  };
  return (
    <LoginContainer>
      <TitleContainer>登 录</TitleContainer>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <ButtonContainer
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登 录
          </ButtonContainer>
        </Form.Item>
      </Form>
    </LoginContainer>
  );
};
export default Login;
