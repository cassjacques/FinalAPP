import { Link } from 'react-router-dom';

const FitsCard = (props) => {
  return (
    <div>
      <h4>{props.fit.title}</h4>
      <button onClick={() => props.deleteFit(props.fit._id)}>delete</button>{' '}
      <Link to={`/edit-fit/${props.fit._id}`}><button>Edit</button></Link>
      <hr />
      <br />
      <br />
    </div>
  );
};

export default FitsCard;