import styles from './Sidebar.Module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu/Menu';
import { MenuItem } from './Menu';
import SuggestedAcounts from '~/component/SuggestedAcounts';
import Discover from '~/component/Discover';
import Contact from '~/component/Contact';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/component/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapperr')}>
            <div className={cx('last1')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    ></MenuItem>
                    <SuggestedAcounts label="Suggested acount" />
                    <SuggestedAcounts choose label="Following accounts" />
                    <Discover />
                    <Contact />
                </Menu>
            </div>
        </aside>
    );
}

export default Sidebar;
