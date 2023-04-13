import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.Module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('menu-item1', { active: nav.isActive })} to={to}>
            <span className={cx('icon1')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title1')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
