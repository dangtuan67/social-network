import classNames from 'classnames/bind';
import styles from './Popper.Module.scss';

const cx = classNames.bind(styles);
function Wrapper({ children, className }) {
    return <div className={cx('wrapper2', className)}>{children}</div>;
}

export default Wrapper;
