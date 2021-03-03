import React from 'react';
import FitsList from '../components/Fits/FitsList';

class FitsPage extends React.Component {
    state = {
        fits: [{title: 'outfit 1'}],
    };
    
    componentDidMount() {
        fetch('https://localhost:4000/api/v1/fits')
          .then((response) => response.json())
          .then((jsonData) => {
            this.setState({
              fits: jsonData
            });
          })
          .catch()
      }
    
      handleDeleteFit = (fitId) => {
    
        fetch(`https://localhost:4000/api/v1/fits/${fitId}`, {
          method: 'DELETE'
        })
          .then((response) => {
            return response.json();
          })
          .then(() => {
            const stateCopy = {...this.state};
            const updatedState = stateCopy.fits.filter((fitObj) => {
              return fitObj._id !== fitId
            });
    
            this.setState({
              fits: updatedState
            });
          })
          .catch((err) => console.log(err));
      };
      
      render() {
        return (
          <div>
            <h1>Fits Page</h1>
            <FitsList fits={this.state.fits} deleteFit={this.handleDeleteFit} />
          </div>
        );
      }
    };
    
    export default FitsPage;
     