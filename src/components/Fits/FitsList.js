import FitsCard from './FitsCard';

const FitsList = (props) => {
    return props.fits.map((fitsObj) => {
        return <FitsCard key={fitsObj._id} fit={fitsObj} deleteFit={props.deleteFit} />
    });
};

export default FitsList;