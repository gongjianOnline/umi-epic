import React, { createRef } from 'react';
import styled from 'styled-components';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { User } from '../../util/serverLess';
import { history } from 'umi';
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
  username: string;
  password: string;
}
const Register: React.FC<any> = () => {
  const key = 'updatable';
  const onFinish = (value: FormLabel) => {
    console.log('success', value);
    message.loading({ content: 'Loading...', key });
    User.register(value.username, value.password).then(
      (response) => {
        console.log('注册成功response', response);
        message.success({
          content: '注册成功,自动跳转到登录界面...',
          key,
          duration: 3,
        });
        history.replace('/home/login');
      },
      (err) => {
        console.log('注册失败', err);
        message.error({ content: '注册失败', key, duration: 3 });
      },
    );
  };
  return (
    <LoginContainer>
      <TitleContainer>注 册</TitleContainer>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input
            autoComplete="new-password"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            autoComplete="new-password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item
          name="repeatPassword"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次密码输入不一致');
              },
            }),
          ]}
        >
          <Input
            autoComplete="new-password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请重复输入密码"
          />
        </Form.Item>
        <Form.Item>
          <ButtonContainer
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            注 册
          </ButtonContainer>
        </Form.Item>
      </Form>
    </LoginContainer>
  );
};
export default Register;
