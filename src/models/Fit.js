
import React from 'react';
import ReactDOM from 'react-dom';

class Fit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fit: '' };
  }
  myChangeHandler = (event) => {
    this.setState({fit: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.fit}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<Fit />, document.getElementById('root'));