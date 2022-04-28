import styled from 'styled-components';

export const Button = styled.button`
  margin: 0;
  padding: 10px 20px;
  width: ${props => props.width || 'auto'};
  border: 1px solid #999;
`;
