import styles from './Discover.Module.scss';
import classNames from 'classnames/bind';
import DiscoverItem from './DiscoverItem';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper6')}>
            <p className={cx('label')}>Discover</p>
            <DiscoverItem />
        </div>
    );
}

export default Discover;
