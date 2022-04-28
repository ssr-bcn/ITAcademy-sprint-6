import styled from 'styled-components';

export const StoryWrapper = styled.section`
  width: 100%;
  height: inherit;
  background: url('img/${props => props.bg || '0.jpg'}') center center no-repeat;
  background-size: cover;
`;
