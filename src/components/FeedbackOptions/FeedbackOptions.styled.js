import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 15px;
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px 10px;
  font-weight: 600;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #515ce6;
  }
`;
