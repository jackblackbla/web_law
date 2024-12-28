import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/SearchBar.module.scss';
import cx from 'classnames';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (keyword: string) => void;
  defaultValue?: string;
  isBig?: boolean;
  className?: string;
  autoFocus?: boolean;
  loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = '검색어를 입력하세요',
  onSearch,
  defaultValue = '',
  isBig = false,
  className,
  autoFocus = false,
  loading = false
}) => {
  const [keyword, setKeyword] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim() && !loading) {
      onSearch(keyword.trim());
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleClear = () => {
    setKeyword('');
    inputRef.current?.focus();
  };

  return (
    <form 
      className={cx(
        styles.searchForm,
        { [styles.big]: isBig },
        className
      )} 
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        type="search"
        className={styles.input}
        value={keyword}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={loading}
      />
      {keyword && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={handleClear}
          aria-label="검색어 지우기"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path 
              d="M15 5L5 15M5 5L15 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
      <button 
        type="submit"
        className={styles.searchButton}
        disabled={loading || !keyword.trim()}
        aria-label="검색하기"
      >
        {loading ? (
          <div className={styles.spinner} />
        ) : (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path 
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default SearchBar; 