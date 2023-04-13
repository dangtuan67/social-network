import classNames from 'classnames/bind';
import styles from './SuggestedAcounts.Module.scss';
// import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// import AccountPreview from './AccountPreview';
// import { Wrapper as PopperWrapper } from '~/component/Popper';

const cx = classNames.bind(styles);

function AccountItem({ dataUser }) {
    // Phần tippy chưa xử lý xong
    // const renderpreview = (props) => {
    //     return (
    //         <div tabIndex="-1" {...props}>
    //             <PopperWrapper>
    //                 <AccountPreview />
    //             </PopperWrapper>
    //         </div>
    //     );
    // };
    return (
        <div>
            {/* <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderpreview} placement="bottom">
                <div> */}
            {dataUser.map((datauser, index) => (
                <div className={cx('acount-item')} key={index}>
                    <img className={cx('avatar1')} src={datauser.img} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{datauser.nickname}</strong>
                            <FontAwesomeIcon className={cx('check1')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>{datauser.name}</p>
                    </div>
                </div>
            ))}
            {/* </div>
            </Tippy> */}
        </div>
    );
}

export default AccountItem;
