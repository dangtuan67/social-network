import classNames from 'classnames/bind';
import styles from './Header.Module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faUser,
    faRightFromBracket,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import 'tippy.js/dist/tippy.css'; // optional
import { InboxIcon, MessageIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '~/component/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet',
                },
                {
                    type: 'language',
                    code: 'a',
                    title: 'Japan',
                },
                {
                    type: 'language',
                    code: 'phi',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'ces',
                    title: 'Čeština (Česká republika)',
                },
                {
                    type: 'language',
                    code: 'deu',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    code: 'Uc',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    type: 'language',
                    code: 'T',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'S',
                    title: 'Suomi (Suomi)',
                },
                {
                    type: 'language',
                    code: 'Fi',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'Fr',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'Mag',
                    title: 'Magyar (Magyarország)',
                },
                {
                    type: 'language',
                    code: 'Malay',
                    title: 'Português (Brasil)',
                },
                {
                    type: 'language',
                    code: 'Neder',
                    title: 'Nederlands (Nederland)',
                },
                {
                    type: 'language',
                    code: 'a',
                    title: 'Indonesia',
                },
                {
                    type: 'language',
                    code: 'k',
                    title: 'Korea',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];
function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            //Handle change language
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '@tuandang',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text>Upload</Button>
                            <Tippy delay={[0, 100]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenChange}>
                        {currentUser ? (
                            <Image
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6968648029154836482.jpeg?x-expires=1680422400&x-signature=OJ56GMVezS00UGq0l26j9bhBGFA%3D"
                                className={cx('user-avatar')}
                                alt="NguyenVanA"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
