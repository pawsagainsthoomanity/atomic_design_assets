import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BasicInput = styled.div`
  display: block;
  border-radius: 3px;
  font-size: 14px;
  
  & > input {
    box-sizing: border-box;
    display: block;    
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ddd;
    font-size: 14px;
  }
`;

const Input = ({ type, placeholder }) => {
  return (
    <BasicInput>
      <input type={type} placeholder={placeholder} />
    </BasicInput>
  );
};

Input.propTypes = {
  /** type - text, password */
  type: PropTypes.string,
  /** 도움말 */
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text'
};

export default Input;