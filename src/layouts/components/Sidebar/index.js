import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    UserGrounpIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGrounpActiveIcon,
    LiveActiveIcon,
} from '~/Components/Icons';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For Your"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGrounpIcon />}
                    activeIcon={<UserGrounpActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
