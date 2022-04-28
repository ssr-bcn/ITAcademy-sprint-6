import React from 'react';
import { Welcome } from './components/sections/Welcome';
import Story from './components/sections/Story';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.state = {storyStarted: false};
  }

  handleStartClick() {
    this.setState({storyStarted: true});
  }

  render() {
    let section;
    if (!this.state.storyStarted) {
      section =  <Welcome>
                <h1>Una aventura a l'espai</h1>
                <p>Descobreix la història d'un heroi</p>
                <button onClick={this.handleStartClick}>Comença</button>
              </Welcome>;
    } else {
      section = <Story />
    }

    return (
      <>
        {section}
      </>
    );
  }
}

export default App;
