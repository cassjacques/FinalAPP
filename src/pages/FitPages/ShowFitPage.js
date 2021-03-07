import React from 'react';

class ShowFitPage extends React.Component {
    state = {
        fit: {
            title: '',
            blogPost: '',
            nowPlaying: '',
            weather: '',
            vibe: '',
        }
    }


    componentDidMount = () => {
        fetch(`http://localhost:4020/api/v1/fits/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                this.setState({
                    fit: jsonData
                })
            })
            .catch((err) => console.log(err));
    }

    handleDeleteFit = (fitId) => {
        fetch(`http://localhost:4020/api/v1/fits/${fitId}`, {
            method: 'DELETE'
        })
            .then((response) => {
                return response.json();
            })
            .then(() => {
                const stateCopy = { ...this.state };
                const updatedState = stateCopy.fits.filter((fitObj) => {
                    return fitObj._id !== fitId
                });
                this.setState({
                    fits: updatedState
                });
            })
            .catch((err) => console.log(err))
    };


    render() {
        return (
            <form>
                <div className="card">
                    <h1>{this.state.fit.title}</h1>

                    <p>{this.state.fit.blogPost}</p>
                    <h2>Now Playing:
                        <p>{this.state.fit.nowPlaying}</p>
                    </h2>
                    <h2>Weather:
                        <p>{this.state.fit.weather}</p>
                    </h2>
                    <h2>Vibe:
                        <p>{this.state.fit.vibe}</p>
                    </h2>
                </div>
                <button>BACK</button>
                <button>EDIT</button>
                <button type="delete">DELETE</button>
            </form>
        );
    };
};



export default ShowFitPage;