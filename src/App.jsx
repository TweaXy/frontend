import ForgetPasswordStartPage from './pages/forget-password/ForgetPasswordStartPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage.jsx';
import './pages/HomePage/HomePage.css';
import ProfilePage from './pages/userProfile/ProfilePage.jsx';
import FollowingFollowersPage from './pages/FollowingFollowersPage/FollowingFollowersPage.jsx';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* <Route index element={<WelcomePage />} /> */}
                    {/* <Route index element={<HomePage />} /> */}
                    <Route
                        index
                        element={<FollowingFollowersPage activePage={0} />}
                    />
                    <Route
                        path="/forget-password"
                        element={<ForgetPasswordStartPage />}
                    />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/home" element={<HomePage />} />
                    {/*TODO:: put the other routes here*/}
                </Routes>
            </Router>
        </>
    );
}

export default App;
