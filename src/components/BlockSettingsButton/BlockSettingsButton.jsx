import SettingsPageSelectors from '../../shared/selectors/SettingsPage';
import './BlockSettingsButton.css';
import { BlockOutlined, NavigateNextOutlined } from '@mui/icons-material';

const BlockSettingsButton = ({ onClickHandler }) => {
    return (
        <div className="block-settings-btn-container" onClick={onClickHandler} data-test={SettingsPageSelectors.MANAGE_BLOCKS_BUTTON}>
            <BlockOutlined style={{ color: '#536471', flex: '0.1' }} />
            <div className="text-container">
                <span className="header">Block</span>
                <span>Manage the accounts that you've blocked.</span>
            </div>
            <NavigateNextOutlined style={{ color: '#536471', flex: '0.1' }} />
        </div>
    );
};

export default BlockSettingsButton;
