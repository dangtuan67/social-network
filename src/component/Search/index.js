import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import AccountItem from '~/component/AccountItem';
import styles from './Search.Module.scss';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import { SearchIcon } from '~/component/Icons';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

const dataUser1 = [
    {
        id: 1,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b975333292e901e1ca6e62334577dc79~c5_100x100.jpeg?x-expires=1681401600&x-signature=be4Hy7YaeLreiimkCpy%2FyXOPhl4%3D',
        full_name: 'leanhtu2206198',
        nickname: 'Lê Tú',
    },
    {
        id: 2,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/7b605876d0d65978474b3ee59ab54dea.jpeg?x-expires=1681401600&x-signature=PG7KlWWWqEIVar7Q4AtYJWnkzgY%3D',
        full_name: 'cuongjin08',
        nickname: 'Cuong Jin',
    },
    {
        id: 3,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c52c0c2fad6c75ac251506b74b7835ca~c5_100x100.jpeg?x-expires=1681394400&x-signature=%2F2DD6IiJcSG%2Bg%2BdhuX0tHxo3KIY%3D',
        full_name: 'nguyet.china',
        nickname: 'Nguyet China',
    },
    {
        id: 4,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ed8ef5ca38c396a179b1d8f787cf1458~c5_100x100.jpeg?x-expires=1681394400&x-signature=yl8B%2BiFowt9Sa%2FkHI1BEc3J9MwM%3D',
        full_name: 'chulamtamdaoquan',
        nickname: 'Chú Lâm Tâm Đạo',
    },
];

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    console.log('begin');
    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };
    const handleHideResult = () => {
        // setShowResult(false);
        setSearchResult([]);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            console.log('handleChange');
            setSearchValue(searchValue);
        }
    };
    console.log('before');
    const debounced = useDebounce(searchValue, 500);
    console.log('after');

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        // const fetchApi = async () => {
        setLoading(true);
        // const result = await searchService.search(debounced);
        setSearchResult(debounced);
        setLoading(false);
        // };
        // fetchApi();
    }, [debounced]);
    return (
        <div>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {dataUser1.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search acounts and videos"
                        onChange={handleChange}
                        onFocus={() => setSearchResult(debounced)}
                    ></input>
                    {!!searchValue && !loading && (
                        <button onClick={handleClear} className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
