import SOSsCard from './SOSsCard';

const SOSsList = (props) => {
    return props.soss.map((sossObj) => {
        return (
            <SOSsCard key={sossObj._id} sos={sossObj} deleteSOS={props.deleteSOS} />
        )
    });
};

export default SOSsList;