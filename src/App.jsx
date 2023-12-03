import ForgetPasswordStartPage from './pages/ForgetPasswordPage/ForgetPasswordStartPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage.jsx';
import './pages/HomePage/HomePage.css';
import ProfilePage from './pages/userProfile/ProfilePage.jsx';
import FollowingPage from './pages/FollowingPage/FollowingPage.jsx';
import FollowersPage from './pages/FollowersPage/FollowersPage.jsx';
import SearchForUsersOrTweetsPage from './pages/SearchForUsersOrTweetsPage/SearchForUsersOrTweetsPage.jsx';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<WelcomePage />} />
                    <Route
                        path="/forget-password"
                        element={<ForgetPasswordStartPage />}
                    />
                    <Route
                        path="/profile/:username"
                        element={<ProfilePage />}
                    />
                    <Route path="/home" element={<HomePage />} />
                    <Route
                        path="/:username/following"
                        element={<FollowingPage />}
                    />
                    <Route
                        path="/:username/followers"
                        element={<FollowersPage />}
                    />
                    <Route
                        path="/search"
                        element={<SearchForUsersOrTweetsPage />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
