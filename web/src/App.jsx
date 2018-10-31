import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import postMessage from './actions/postMessage';

class App extends React.Component {
  static propTypes = {
    postMessage: PropTypes.func.isRequired,
    message: PropTypes.string
  }

  static defaultProps = {
    message: ''
  }

  state = {
    message: ''
  }

  postMessage(e) {
    e.preventDefault();
    const { postMessage } = this.props;
    const { message } = this.state;
    return postMessage(message);
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        <form onSubmit={e => this.postMessage(e)}>
          <input type="text" onChange={e => this.setState({ message: e.target.value })} />
          <button type="button" onClick={e => this.postMessage(e)}>Post Message</button>
        </form>
        <h3>
          {message}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({ message: state.message.noteFromEarth });

export default connect(mapStateToProps, { postMessage })(App);
