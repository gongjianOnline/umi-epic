import React, { useEffect } from 'react';
import { Button } from 'antd';
import Icon from './Icon/Icon';
import styled from 'styled-components';
import { history } from 'umi';
import { connect } from 'dva';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #222a68;
  color: #fff;
  font-size: 1.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  div {
    width: 40px;
    height: 40px;
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  li {
    display: inline-block;
    margin-left: 20px;
    cursor: pointer;
  }
`;
const ButtonMargin = styled(Button)`
  margin-right: 10px;
`;
const Header: React.FC<any> = (props) => {
  const handelCLick = (routePath: string) => {
    history.push(routePath);
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <div>
          <Icon iconName="icon-tuzijiao" />
        </div>
        <ul>
          <li onClick={() => handelCLick('/home')}>首页</li>
          <li onClick={() => handelCLick('/home/history')}>历史</li>
        </ul>
      </HeaderLeft>
      {props.userName ? (
        <div>欢迎用户 {props.userName}</div>
      ) : (
        <div>
          <ButtonMargin
            type="primary"
            onClick={() => handelCLick('/home/login')}
          >
            登录
          </ButtonMargin>
          <ButtonMargin
            type="primary"
            onClick={() => handelCLick('/home/register')}
          >
            注册
          </ButtonMargin>
        </div>
      )}
    </HeaderContainer>
  );
};
export default connect((state: any) => state.user)(Header);
