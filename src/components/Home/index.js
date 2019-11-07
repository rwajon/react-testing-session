import React from 'react';
import { PropTypes } from 'prop-types';

const Home = ({ value, onChange, results }) => (
  <div>
    <h1>Home</h1>
    <div>
      <input name="name" value={value} onChange={onChange} autoComplete="off" />
    </div>
    <div>
      {results.map((result) => (<h4 key={result}>{result}</h4>))}
    </div>
  </div>
);

Home.propTypes = {
  value: PropTypes.sting,
  onChange: PropTypes.func,
  results: PropTypes.array
};

export default Home;
