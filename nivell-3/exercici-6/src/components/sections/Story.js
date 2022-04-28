import { useState } from 'react';
import { StoryWrapper } from '../layout/StoryWrapper';
import { Nav } from '../layout/Nav';
import { Button } from '../layout/Button';
import { PWithBorder } from '../layout/PWithBorder';
import { escenes } from '../escena/escenes';
import Escena from '../escena/Escena';

export default function Story() {
  const positions = escenes.length;
  const [actualPosition, setPosition] = useState(0);
  const [actualBg, setBg] = useState(escenes[0].img);

  const navigation = step => {
    const check = actualPosition + step;

    if ( check <= positions - 1 && check >= 0 ) {
      setPosition(check);
      setBg(escenes[check].img);
    }
  }

  const sceneList = escenes.map( (obj, index) => {
    return <PWithBorder key={index} isActive={actualPosition === index}>
              <Escena escena={obj.txt} />
            </PWithBorder>;
  });

  return (
    <StoryWrapper bg={actualBg}>
      <Nav>
        <Button width="50%" onClick={e => navigation(-1)}>Anterior</Button>
        <Button width="50%" onClick={e => navigation(1)}>Següent</Button>
      </Nav>

      {sceneList}
    </StoryWrapper>
  );
}
