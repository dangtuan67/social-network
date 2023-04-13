import Button from '~/component/Button';
import styles from './Following.Module.scss';
import classNames from 'classnames/bind';
import video from '~/assets/video/abc.mp4';
import video1 from '~/assets/video/mabeo.mp4';
import video2 from '~/assets/video/mnp.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Following() {
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };
    const handleClick1 = () => {
        setIsActive1(!isActive1);
    };
    const handleClick2 = () => {
        setIsActive2(!isActive2);
    };
    const classes = cx('wrapper9', {
        isActive,
    });
    const classes1 = cx('wrapper9', {
        isActive1,
    });
    const classes2 = cx('wrapper9', {
        isActive2,
    });
    return (
        <div className={cx('wrapper8')}>
            <div className={cx('individual')}>
                <div>
                    <img
                        className={cx('image-individual')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/02d7a7bb3f521cab82ef53ac8a8ce074~c5_100x100.jpeg?x-expires=1681358400&x-signature=4fL4YyAC5qzdqcOQD9NdLgHCAco%3D"
                        alt=""
                    />
                </div>
                <div className={cx('video')}>
                    <div className={cx('header2')}>
                        <div>
                            <div className={cx('information')}>
                                <h3 className={cx('nick')}>ducnguyenanh71</h3>
                                <h4 className={cx('nickk')}>D U C A N H</h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('maintoast')}>
                        <span className={cx('description')}>baby i’m sorry..</span>
                        <a className={cx('main-content')} href="/">
                            #i'm fallin'
                        </a>
                    </div>
                    <div className={cx('musicc')}>
                        <FontAwesomeIcon className={cx('icondiscover')} icon={faMusic} />
                        <p className={cx('music2')}>haydeanhduoccungemdau</p>
                    </div>
                    <div>
                        <div className={cx('interact')}>
                            <video className={cx('dance')} height="505px" width="285px" controls autoPlay>
                                <source src={video} type="video/mp4"></source>
                            </video>
                            <div className={cx('icon-interact')}>
                                <div className={classes} onClick={handleClick}>
                                    <div className={cx('wrap')}>
                                        <FontAwesomeIcon className={cx('iconn')} icon={faHeart} />
                                    </div>
                                    <p className={cx('info-interact')}>3.5M</p>
                                </div>
                                <div className={cx('wrapper9')}>
                                    <div className={cx('wrap')}>
                                        <FontAwesomeIcon className={cx('iconn')} icon={faCommentDots} />
                                    </div>
                                    <p className={cx('info-interact')}>7887</p>
                                </div>
                                <div className={cx('wrapper9')}>
                                    <div className={cx('wrap')}>
                                        <FontAwesomeIcon className={cx('iconn')} icon={faShare} />
                                    </div>
                                    <p className={cx('info-interact')}>41.4K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('individual')}>
                <div>
                    <img
                        className={cx('image-individual')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/69b9714323232769734cf135819b1185~c5_100x100.jpeg?x-expires=1681358400&x-signature=PyUCKNht9ocaroIiktr%2BYYHTBB0%3D"
                        alt=""
                    />
                </div>
                <div className={cx('video')}>
                    <div className={cx('header2')}>
                        <div>
                            <div className={cx('information')}>
                                <h3 className={cx('nick')}>_wiy.n</h3>
                                <h4 className={cx('nickk')}>wiy.1-30</h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('maintoast')}>
                        <span className={cx('description')}>ngay dem giong nhau deu tam toi</span>
                        <a className={cx('main-content')} href="/">
                            @Hau Beo #Chim`Sa^u #NhacHayMoiNgay
                        </a>
                    </div>
                    <div className={cx('musicc')}>
                        <FontAwesomeIcon className={cx('icondiscover')} icon={faMusic} />
                        <p className={cx('music2')}>I don't know</p>
                    </div>
                    <div>
                        <div className={cx('interact')}>
                            <video className={cx('dance')} height="505px" width="285px" controls>
                                <source src={video1} type="video/mp4"></source>
                            </video>
                            <div className={cx('icon-interact')}>
                                <div className={classes1} onClick={handleClick1}>
                                    <div className={cx('wrap')}>
                                        <FontAwesomeIcon className={cx('iconn')} icon={faHeart} />
                                    </div>
                                    <p className={cx('info-interact')}>2.5M</p>
                                </div>
                                <div className={cx('wrapper9')}>
                                    <div className={cx('wrap')}>
                                        <FontAwesomeIcon className={cx('iconn')} icon={faCommentDots} />
                                    </div>
                                    <p className={cx('info-interact')}>9874</p>
                                </div>
                                <div className={cx('wrapper9')}>
                                    <div className={cx('wrap')}>
                                        <FontAwesomeIcon className={cx('iconn')} icon={faShare} />
                                    </div>
                                    <p className={cx('info-interact')}>23.4K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('individual')}>
                <div>
                    <img
                        className={cx('image-individual')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/70c7cac9e8f9a0e2f87ae0e8f4344506~c5_100x100.jpeg?x-expires=1681358400&x-signature=nX1imErqB6%2Fy3FjfSEEHwarDJ7M%3D"
                        alt=""
                    />
                </div>
                <div className={cx('video')}>
                    <div className={cx('header2')}>
                        <div>
                            <div className={cx('information')}>
                                <h3 className={cx('nick')}>dng.har</h3>
                                <h4 className={cx('nickk')}>nhạc này sầu ♪☻</h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('maintoast')}>
                        <span className={cx('description')}>Người hứa bên bạn mãi mãi giờ sao rồi..?</span>
                        <a className={cx('main-content')} href="/">
                            #confide_one #xuhuong #gnas1614
                        </a>
                    </div>
                    <div className={cx('musicc')}>
                        <FontAwesomeIcon className={cx('icondiscover')} icon={faMusic} />
                        <p className={cx('music2')}>Diễn viên</p>
                    </div>
                    <div>
                        <div className={cx('interact')}>
                            <video className={cx('dance')} height="505px" width="285px" controls>
                                <source src={video2} type="video/mp4"></source>
                            </video>
                            <div className={cx('icon-interact')}>
                                <div className={classes2} onClick={handleClick2}>
                                    <div className={cx('wrap')}>
                                        <FontAwesomeIcon className={cx('iconn')} icon={faHeart} />
                                    </div>
                                    <p className={cx('info-interact')}>1.2M</p>
                                </div>
                                <div className={cx('wrapper9')}>
                                    <div className={cx('wrap')}>
                                        <FontAwesomeIcon className={cx('iconn')} icon={faCommentDots} />
                                    </div>
                                    <p className={cx('info-interact')}>5568</p>
                                </div>
                                <div className={cx('wrapper9')}>
                                    <div className={cx('wrap')}>
                                        <FontAwesomeIcon className={cx('iconn')} icon={faShare} />
                                    </div>
                                    <p className={cx('info-interact')}>65.3K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Following;
