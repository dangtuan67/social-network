import styles from './Contact.Module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper7')}>
            <div className={cx('space')}>
                <a className={cx('go')} href="./home">
                    About
                </a>
                <a className={cx('go')} href="./home">
                    Newsroom
                </a>
                <a className={cx('go')} href="./home">
                    Contact
                </a>
                <a className={cx('go')} href="./home">
                    Careers
                </a>
                <a className={cx('go')} href="./home">
                    ByteDance
                </a>
            </div>
            <div className={cx('space')}>
                <a className={cx('go')} href="./home">
                    TikTok for Good
                </a>
                <a className={cx('go')} href="./home">
                    Advertise
                </a>
                <a className={cx('go')} href="./home">
                    Developers
                </a>
                <a className={cx('go')} href="./home">
                    Transparency
                </a>
                <a className={cx('go')} href="./home">
                    TikTok Rewards
                </a>
                <a className={cx('go')} href="./home">
                    TikTok Embeds
                </a>
            </div>
            <div className={cx('space')}>
                <a className={cx('go')} href="./home">
                    Help
                </a>
                <a className={cx('go')} href="./home">
                    Safety
                </a>
                <a className={cx('go')} href="./home">
                    Terms
                </a>
                <a className={cx('go')} href="./home">
                    Privacy
                </a>
                <a className={cx('go')} href="./home">
                    Creator Portal
                </a>
                <a className={cx('go')} href="./home">
                    Community Guidelines
                </a>
            </div>
            <div className={cx('space')}>
                <span className={cx('last')}>© 2023 TikTok</span>
            </div>
        </div>
    );
}

export default Contact;
