import styled from 'styled-components';
import { escenes } from '../escena/escenes';

export const StoryWrapper = styled.section`
  width: 100%;
  height: inherit;
  background: url('img/${props => props.bg}') center center no-repeat;
  background-size: cover;
`;

StoryWrapper.defaultProps = {
  bg: escenes[0].img
}
