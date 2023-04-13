import classNames from 'classnames/bind';
import styles from './AccountPreview.Module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/component/Button';

const cx = classNames.bind(styles);

function AccountPreview({ userData }) {
    return (
        <div className={cx('wrapper7')}>
            <div className={cx('header2')}>
                <img
                    className={cx('avatar3')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b9feca543a0a96156cd995c0f3f2a1cb~c5_100x100.jpeg?x-expires=1681131600&x-signature=bh1j7UR0wOEwT5v7P2ha1tELyQI%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname1')}>
                    <strong>kienreview</strong>
                    <FontAwesomeIcon className={cx('check2')} icon={faCheckCircle} />
                </p>
                <p className={cx('name1')}>Kien Review</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label1')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label1')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
