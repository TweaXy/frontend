import ForgetPasswordStartPage from './pages/ForgetPasswordPage/ForgetPasswordStartPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage.jsx';
import './pages/HomePage/HomePage.css';
import ProfilePage from './pages/userProfile/ProfilePage.jsx';
import FollowingPage from './pages/FollowingPage/FollowingPage.jsx';
import FollowersPage from './pages/FollowersPage/FollowersPage.jsx';
import SearchForUsersOrTweetsPage from './pages/SearchForUsersOrTweetsPage/SearchForUsersOrTweetsPage.jsx';
import SettingsPage from './pages/SettingsPage/SettingsPage.jsx';
import ChangePasswordPage from './pages/SettingsPage/ChangePasswordPage.jsx';
import ChangeUsernamePage from './pages/SettingsPage/ChangeUsernamePage.jsx';
import NotificationPage from './pages/NotificationPage/NotificationPage.jsx';
import ChangeEmailPage from './pages/SettingsPage/ChangeEmailPage.jsx';
import MuteSettingsPage from './pages/SettingsPage/MuteSettingsPage.jsx';
import BlockSettingsPage from './pages/SettingsPage/BlockSettingsPage.jsx';
import LikersPage from './pages/PostEngagementPage/LikersPage.jsx';
import RetweetersPage from './pages/PostEngagementPage/retweetersPage.jsx';
import MessagePage from './pages/MessagesPage/MessagePage.jsx';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<WelcomePage />} />
                    {/*} <Route index element={<LikersPage />} />*/}
                    <Route
                        path="/forget-password"
                        element={<ForgetPasswordStartPage />}
                    />
                    <Route path="/retweets" element={<RetweetersPage />} />
                    <Route path="/conversations" element={<MessagePage />} />
                    <Route
                        path="/profile/:username"
                        element={<ProfilePage />}
                    />
                    <Route path="/home" element={<HomePage />} />
                    <Route
                        path="/:username/following"
                        element={<FollowingPage />}
                    />
                    <Route path="/likers" element={<LikersPage />} />
                    <Route
                        path="/:username/followers"
                        element={<FollowersPage />}
                    />
                    <Route
                        path="/search/:word"
                        element={<SearchForUsersOrTweetsPage />}
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
                    <Route
                        path="/settings/email"
                        element={<ChangeEmailPage />}
                    />
                    <Route
                        path="/settings/mute"
                        element={<MuteSettingsPage />}
                    />
                    <Route
                        path="/settings/blocked"
                        element={<BlockSettingsPage />}
                    />
                    <Route
                        path="/Notifications"
                        element={<NotificationPage />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
