import React from 'react';

class ShowSOSPage extends React.Component {
    state = {
        sos: {
            title: '',
            blogPost: '',
            brand: '',
            size: '',
            condition: '',
            price: '',
        }
    }

    

    componentDidMount = () => {
        fetch(`http://localhost:4020/api/v1/soss/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                this.setState({
                    sos: jsonData
                })
            })
            .catch((err) => console.log(err));
    }



    handleDeleteSOS = (sosId) => {
        fetch(`http://localhost:4020/api/v1/soss/${sosId}`, {
            method: 'DELETE'
        })
            .then((response) => {
                return response.json();
            })
            .then(() => {
                const stateCopy = { ...this.state };
                const updatedState = stateCopy.soss.filter((sosObj) => {
                    return sosObj._id !== sosId
                });
                this.setState({
                    soss: updatedState
                });
            })
            .catch((err) => console.log(err))
    };


    render() {
        return (
            <form>
                <div className="card">
                    <h1>{this.state.sos.title}</h1>

                    <p>{this.state.sos.blogPost}</p>

                    <h2>Brand:</h2>
                    <p>{this.state.sos.brand}</p>

                    <h2>Size:</h2>
                    <p>{this.state.sos.size}</p>

                    <h2>Condition:</h2>
                    <p>{this.state.sos.condition}</p>

                    <h2>Price:</h2>
                    <p>{this.state.sos.price}</p>

                </div>
            </form>
        );
    };
};



export default ShowSOSPage;