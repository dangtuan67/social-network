import styles from './SuggestedAcounts.Module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAcounts({ label, choose }) {
    const dataUser1 = [
        {
            img: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b9feca543a0a96156cd995c0f3f2a1cb~c5_100x100.jpeg?x-expires=1681131600&x-signature=bh1j7UR0wOEwT5v7P2ha1tELyQI%3D',
            nickname: 'kienreview',
            name: 'Kien Review',
        },
        {
            img: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d1b57489fe0fbc9f69743de695e4f89c~c5_100x100.jpeg?x-expires=1681196400&x-signature=tKdSGi68mPiqpTfnjkoJn0yXAqs%3D',
            nickname: 'heyiamlinda',
            name: 'Linda Ngo',
        },
        {
            img: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/aee057941301af2efecea5e2f7906c34~c5_100x100.jpeg?x-expires=1681200000&x-signature=5UkdI9pXqoJODP6c8nvUcXYokpc%3D',
            nickname: 'cciinnn',
            name: 'CiiN',
        },
    ];

    const dataUser2 = [
        {
            img: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6969056083323125761.jpeg?x-expires=1681207200&x-signature=Whf%2Fo1t7O2wL1zRqk2vpJdbkQJE%3D',
            nickname: 'san_gggg',
            name: 'san_gggg',
        },
        {
            img: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6a4ffec74f037bdc05bddcad1dd63e59~c5_100x100.jpeg?x-expires=1681207200&x-signature=QCWlX1tX4TxKu53FVv%2BaMs%2BaIGE%3D',
            nickname: 'namnem_trieu97',
            name: 'AngryPotato',
        },
        {
            img: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/86fd7660037e6587340b4cc919516bb5~c5_100x100.jpeg?x-expires=1681207200&x-signature=7dXpI0KdEa3blTfYk5GLaTT%2Ft08%3D',
            nickname: 'mocachodien',
            name: 'MOCA 🐶🇻🇳',
        },
    ];

    return (
        <div className={cx('wrapper6')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem dataUser={choose ? dataUser2 : dataUser1} />

            <p className={cx('more-btn1')}>See all</p>
        </div>
    );
}

export default SuggestedAcounts;
