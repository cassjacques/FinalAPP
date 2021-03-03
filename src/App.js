import routes from './config/routes';
import { Link } from 'react-router-dom';
import Routes from './config/routes';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>{' '}
        <Link to='/fits'>Fits</Link>{' '}
        <Link to='/new-fit'>New Fit</Link>
      </nav>
      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;
