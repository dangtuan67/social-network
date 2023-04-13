import styles from './Discover.Module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DiscoverItem() {
    return (
        <div className={cx('innerdiscover')}>
            <div className={cx('discover')}>
                <FontAwesomeIcon className={cx('icondiscover')} icon={faHashtag} />
                <p className={cx('contentdiscover')}>suthatla</p>
            </div>
            <div className={cx('discover')}>
                <FontAwesomeIcon className={cx('icondiscover')} icon={faHashtag} />
                <p className={cx('contentdiscover')}>mackedi</p>
            </div>
            <div className={cx('discover')}>
                <FontAwesomeIcon className={cx('icondiscover')} icon={faHashtag} />
                <p className={cx('contentdiscover')}>sansangthaydoi</p>
            </div>
            <div className={cx('discover')}>
                <FontAwesomeIcon className={cx('icondiscover')} icon={faHashtag} />
                <p className={cx('contentdiscover')}>7749hieuung</p>
            </div>
            <div className={cx('discover')}>
                <FontAwesomeIcon className={cx('icondiscover')} icon={faMusic} />
                <p className={cx('contentdiscover')}>Thằng hầu (Thái Hoàng Remix )</p>
            </div>
            <div className={cx('discover')}>
                <FontAwesomeIcon className={cx('icondiscover')} icon={faMusic} />
                <p className={cx('contentdiscover')}>Về nghe mẹ ru</p>
            </div>
            <div className={cx('discover')}>
                <FontAwesomeIcon className={cx('icondiscover')} icon={faHashtag} />
                <p className={cx('contentdiscover')}>genzlife</p>
            </div>
            <div className={cx('discover')}>
                <FontAwesomeIcon className={cx('icondiscover')} icon={faMusic} />
                <p className={cx('contentdiscover')}>Thiên thần tình yêu</p>
            </div>
        </div>
    );
}

export default DiscoverItem;
