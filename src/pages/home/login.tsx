import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { User } from '../../util/serverLess';
import { connect, useDispatch } from 'dva';
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
interface ResponseConstraint {
  shortId: string;
  username: string;
  [propsName: string]: any;
}
const Login: React.FC<any> = () => {
  const key = 'updatable';
  const dispatch = useDispatch();
  const onFinish = (value: FormLabel) => {
    message.loading({ content: 'Loading...', key });
    User.Login(value.username, value.password).then(
      (response: any) => {
        const { attributes } = response;
        window.localStorage.setItem('userInfo', JSON.stringify(attributes));
        dispatch({
          type: 'user/userConfig',
          payload: {
            userName: attributes.username,
            userId: attributes.shortId,
          },
        });
        history.replace('/home');
      },
      (err) => {
        message.error({ content: '登录失败', key, duration: 2 });
      },
    );
  };
  return (
    <LoginContainer>
      <TitleContainer>登 录</TitleContainer>
      <Form
        name="normal_login"
        className="login-form"
        autoComplete="off"
        onFinish={onFinish}
      >
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
export default connect((state: any) => state.user)(Login);
