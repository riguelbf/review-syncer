import React, { Component } from 'react';

import { Wrapper } from './styles/components';

import Reviews from './components/reviews/reviewsTable';

class App extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Reviews />
      </Wrapper>
    );
  }
}

export default App;
