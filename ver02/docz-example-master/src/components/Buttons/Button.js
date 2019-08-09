import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BasicButton = styled.div`
  display: block;
  
  ${props => props.inline && css`
    display: inline-block;
    width: auto;
  `};

  button, a {
    box-sizing: border-box;
    display: block;
    height: ${props => props.size}px;
    padding: 0 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    line-height: ${props => props.size}px;
  
    &:hover {
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    
    ${props => props.theme === 'red' && css`
      background-color: #fff;
      border: 1px solid #ddd;
      color: #666;
    `};
    
    ${props => props.theme === 'red' && css`
      background-color: #da032c;
      border: 1px solid #da032c;
      color: #fff;
    `};
  }
`;

const Button = ({ type, href, target, children, theme, size, inline, onClick }) => {
  return (
    <BasicButton theme={theme} size={size} inline={inline} onClick={onClick}>
      {type === 'button' ?
        <button type="button">{children}</button>
        :
        <a href={href} target={target}>{children}</a>
      }
    </BasicButton>
  );
};

Button.propTypes = {
  /** 타입 */
  type: PropTypes.string,
  /** display 속성 */
  inline: PropTypes.bool,
  /** 버튼명 */
  children: PropTypes.string.isRequired,
  /** 테마 */
  theme: PropTypes.string.isRequired,
  /** 크기 */
  size: PropTypes.number,
  /** 클릭이벤트 */
  onClick: PropTypes.func,
  /** anchor type 인 경우 입력 */
  href: PropTypes.string,
  /** anchor type 인 경우 입력 */
  target: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  size: 40,
  inline: true,
};

export default Button;