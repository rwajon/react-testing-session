import React, { Component } from 'react';
import Home from '../../components/Home';

export class HomeContainer extends Component {
  state = {
    value: '',
    results: ['John', 'Pascal']
  };

  onChange = () => true;

  render() {
    const { value, results } = this.state;
    return (
      <div>
        <Home value={value} results={results} onChange={this.onChange} />
      </div>
    );
  }
}

export default HomeContainer;
