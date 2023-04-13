import Button from '~/component/Button';
import styles from './Home.Module.scss';
import classNames from 'classnames/bind';
import video from '~/assets/video/coman.mp4';
import video1 from '~/assets/video/langman.mp4';
import video2 from '~/assets/video/xinloi.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
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
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b0bf939e0a3520285396803f9f356b98~c5_100x100.jpeg?x-expires=1681279200&x-signature=cavqEpYP4CesFiDsTjgAQEtXXww%3D"
                        alt=""
                    />
                </div>
                <div className={cx('video')}>
                    <div className={cx('header2')}>
                        <div>
                            <div className={cx('information')}>
                                <h3 className={cx('nick')}>oggy221267</h3>
                                <h4 className={cx('nickk')}>Man Co</h4>
                            </div>
                        </div>
                        <Button className={cx('but')} outline small>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('maintoast')}>
                        <span className={cx('description')}>Chillin</span>
                        <a className={cx('main-content')} href="/">
                            @Lan Huong #idoltiktok 🤣
                        </a>
                    </div>
                    <div className={cx('musicc')}>
                        <FontAwesomeIcon className={cx('icondiscover')} icon={faMusic} />
                        <p className={cx('music2')}>Thiên thần tình yêu</p>
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
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/46105758ab0606521f48fb6e8e88f027.jpeg?x-expires=1681351200&x-signature=uu4GifjwknQfwXaeuxjwJ5LSGl4%3D"
                        alt=""
                    />
                </div>
                <div className={cx('video')}>
                    <div className={cx('header2')}>
                        <div>
                            <div className={cx('information')}>
                                <h3 className={cx('nick')}>tramphat04</h3>
                                <h4 className={cx('nickk')}>Trạm Phát 04</h4>
                            </div>
                        </div>
                        <Button className={cx('but')} outline small>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('maintoast')}>
                        <span className={cx('description')}>thì ra, lãng mạn không phải là mùa hè</span>
                        <a className={cx('main-content')} href="/">
                            @Bich Hau #MuaTotNghiep #NhacHayMoiNgay
                        </a>
                    </div>
                    <div className={cx('musicc')}>
                        <FontAwesomeIcon className={cx('icondiscover')} icon={faMusic} />
                        <p className={cx('music2')}>Head In The Clouds</p>
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
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c6f88e557437d9c5ebc2f6f69f0f780d~c5_100x100.jpeg?x-expires=1681354800&x-signature=nyAILyibkyrZ%2FheQmvd7LLBaBa4%3D"
                        alt=""
                    />
                </div>
                <div className={cx('video')}>
                    <div className={cx('header2')}>
                        <div>
                            <div className={cx('information')}>
                                <h3 className={cx('nick')}>chill.buon</h3>
                                <h4 className={cx('nickk')}>ChiLL Buồn</h4>
                            </div>
                        </div>
                        <Button className={cx('but')} outline small>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('maintoast')}>
                        <span className={cx('description')}>Xin lỗi vì chẳng thể di cùng nhau để bây giờ cách xa</span>
                        <a className={cx('main-content')} href="/">
                            @Dao Le #XuHuong #NhacHayMoiNgay #NhacBuon
                        </a>
                    </div>
                    <div className={cx('musicc')}>
                        <FontAwesomeIcon className={cx('icondiscover')} icon={faMusic} />
                        <p className={cx('music2')}>3107</p>
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

export default Home;
