import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.Module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { Wrapper as PopperWrapper } from '~/component/Popper';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParrent = !!item.children;
            return (
                <MenuItem
                    onClick={() => {
                        if (isParrent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                    key={index}
                    data={item}
                />
            );
        });
    };
    return (
        <Tippy
            offset={[12, 8]}
            delay={[0, 200]}
            interactive
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;