import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  color: #fff;
`;
interface Props {
  iconName: String;
  [propsName: string]: any;
}

const Icon: React.FC<Props> = (props) => {
  return (
    <SVG aria-hidden="true">
      <use xlinkHref="#icon-tuzijiao"></use>
    </SVG>
  );
};
export default Icon;
