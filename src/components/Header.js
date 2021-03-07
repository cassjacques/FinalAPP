import { useState } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../config/routes';

const styles = {
  logoutButton: {
    textDecoration: 'underline',
    cursor: 'pointer',
  }
};

function Header() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
  }

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>{' '}
        <Link to='/fits'>Fits</Link>{' '}
        <Link to='/soss'>SOS</Link>{' '}
        <Link to='/new-fit'>New Fit</Link>{' '}
        <Link to='/new-sos'>New SOS</Link>{' '}
        <Link to='/signup'>SignUp</Link>{' '}
        <Link to='/login'>SignIn</Link>{' '}
        <span style={styles.logoutButton} onClick={handleLogout}>LogOut</span>
      </nav>
      <div>
        <Routes token={token} setToken={setToken} />
      </div>
    </div>
  );
}


export default Header;
