import { Routes, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import FitsPage from '../pages/FitPages/FitsPage';
import NewFitPage from '../pages/FitPages/NewFitPage';
import EditFitPage from '../pages/FitPages/EditFitPage';
import ShowFitPage from '../pages/FitPages/ShowFitPage';
import SOSsPage from '../pages/SOSPages/SOSsPage';
import NewSOSPage from '../pages/SOSPages/NewSOSPage';
import EditSOSPage from '../pages/SOSPages/EditSOSPage';
import ShowSOSPage from '../pages/SOSPages/ShowSOSPage';
import SignupPage from '../pages/User/SignupPage';
import LoginPage from '../pages/User/LoginPage';
import ProfilePage from '../pages/User/ProfilePage';
import EditProfilePage from '../pages/User/EditProfilePage';

const routes = ({ token, setToken }) => (
  <Routes>
    <Route exact path='/' element={<HomePage/>} />
    <Route exact path='/about' element={<AboutPage/>} />
    <Route path='/signup' element={<SignupPage/>} />
    <Route path='/login' element={<() => <LoginPage setToken={<setToken/>} />/>} />
    <Route path='/edit-profile/:id' element={<EditProfilePage/>} />
    {<token ? <Route path='/profile' element={<ProfilePage/>} /> : <Redirect to='login' />/>} 
    <Route path='/fits' element={<FitsPage/>} />
    <Route path='/new-fit' element={<NewFitPage/>} />
    <Route path='/edit-fit/:id' element={<EditFitPage/>} />
    <Route path='/show-fit/:id' element={<ShowFitPage/>} />
    <Route path='/soss' element={<SOSsPage/>} />
    <Route path='/new-sos' element={<NewSOSPage/>} />
    <Route path='/edit-sos/:id' element={<EditSOSPage/>} />
    <Route path='/show-sos/:id' element={<ShowSOSPage/>} />
    <Route path='*' element={() => <div><h2>Page Not Found</h2></div>} />
  </Routes>
);

export default routes;
