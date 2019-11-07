import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../../components/Home';
// import searchUser from '../../redux/actions/searchUser';

export class HomeContainer extends Component {
  state = {
    value: '',
    error: '',
    results: ['John', 'Pacal'],
    filteredResults: [],
  };

  onChange = ({ target }) => {
    const { results } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      value: target.value,
      filteredResults: results.filter((val) => val.indexOf(target.value) >= 0)
    }));
  };

  onClick = () => {
    const { value } = this.state;
    if (!value) {
      this.setState({ error: 'sorry, the input should not be empty' });
    }
  };

  render() {
    const { value, results, error } = this.state;
    return (
      <div>
        {error}
        <Home value={value} results={results} onChange={this.onChange} />
        <button type="submit" onClick={this.onClick}>Submit</button>
      </div>
    );
  }
}

HomeContainer.propTypes = { currentUsers: PropTypes.array, onSearchUser: PropTypes.func };

// const mapStateToProps = ({ users: { currentUsers } }) => ({ currentUsers });
// const mapDispatchAction = (dispatch) => ({ onSearchUser: (value) => dispatch(searchUser(value)) });

export default HomeContainer;
