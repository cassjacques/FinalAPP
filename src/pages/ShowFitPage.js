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
        fetch(`http://localhost:4000/api/v1/fits/${this.props.match.params.id}`)
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
        fetch(`http://localhost:4000/api/v1/fits/${fitId}`, {
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
            <div>
                <h1>{this.state.fit.title}</h1>

                <p>{this.state.fit.blogPost}</p>
                <p>Now Playing
                    <br />
                    {this.state.fit.nowPlaying}
                </p>
                <p>Weather
                    <br />
                    {this.state.fit.weather}
                </p>
                <p>Vibe
                    <br />
                    {this.state.fit.vibe}
                </p>
            </div>
        );
    };
};



export default ShowFitPage;