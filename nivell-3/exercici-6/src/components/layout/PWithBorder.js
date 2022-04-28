import styled from 'styled-components';

export const PWithBorder = styled.p`
  margin: 10px 20px;
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 50px;
  text-align: center;
  background-color: ${props => props.isActive ? '#ffbdc9' : '#fff'};
`;
