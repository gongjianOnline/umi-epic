import React from "react"
import { Button } from 'antd';
import Icon from "./Icon/Icon"
import styled from "styled-components"
const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #414770;
  color:#fff;
  font-size: 1.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  div{
    width: 40px;
    height: 40px;
  }
  ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  li{
    display: inline-block;
    margin-left: 20px;
    cursor: pointer;
  }
`
const ButtonMargin = styled(Button)`
  margin-right: 10px;
`
const Header = ()=>{
  return (
    <HeaderContainer>
      <HeaderLeft>
        <div><Icon iconName="icon-tuzijiao"/></div>
        <ul>
          <li>首页</li>
          <li>历史</li>
        </ul>
      </HeaderLeft>
      <div> 
        <ButtonMargin type="primary">登录</ButtonMargin>
        <ButtonMargin type="primary">注册</ButtonMargin>
      </div>
    </HeaderContainer>
  )
}
export default Header