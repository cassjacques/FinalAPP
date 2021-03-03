import React from 'react';

class EditFitPage extends React.Component {
  state = {
    title: '',
    blogPost: '',
    nowPlaying: '',
    weather: '',
    vibe: '',
  };

  componentDidMount() {
    console.log('Getting Fit')
    fetch(`http://localhost:4000/api/v1/fits/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        this.setState(jsonData)
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/api/v1/fits/${this.props.match.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => this.props.history.push('/fits'))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Edit {this.state.title}</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="blogPost">Blog Post</label><br />
            <input type="text" id="blogPost" name="blogPost" value={this.state.blogPost} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="nowPlaying">Now Playing</label><br />
            <input type="text" id="nowPlaying" name="nowPlaying" value={this.state.nowPlaying} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="weather">Weather</label><br />
            <input type="text" id="weather" name="weather" value={this.state.weather} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="vibe">Vibe</label><br />
            <input type="text" id="vibe" name="vibe" value={this.state.vibe} onChange={this.handleChange} />
          </div>

          <button type="submit">Update Fit</button>
        </form>

      </div>
    );
  }
}

export default EditFitPage;