import ForgetPasswordStartPage from './pages/forget-password/ForgetPasswordStartPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage.jsx';
import './pages/HomePage/HomePage.css';
import ProfilePage from './pages/userProfile/ProfilePage.jsx';
import FollowingPage from './pages/FollowingPage/FollowingPage.jsx';
import FollowersPage from './pages/FollowersPage/FollowersPage.jsx';
import SettingsPage from './pages/SettingsPage/SettingsPage.jsx';
import ChangePasswordPage from './pages/SettingsPage/ChangePasswordPage.jsx';
import ChangeUsernamePage from './pages/SettingsPage/ChangeUsernamePage.jsx';

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
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route
                        path="/settings/password"
                        element={<ChangePasswordPage />}
                    />
                    <Route
                        path="/settings/username"
                        element={<ChangeUsernamePage />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
