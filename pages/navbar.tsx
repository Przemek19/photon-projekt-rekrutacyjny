import type { NextPage } from 'next';

import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Link from 'next/link'

interface ISearchProps {
  search: Function,
};

const Navbar: NextPage<ISearchProps> = (props: ISearchProps) => {
  const [ searchQuery, updateSearchQuery ] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.search) props.search(e.target.value);
    updateSearchQuery(e.target.value);
  }
  const handleSubmit = (e: any) => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      window.location.href = `/?query=${e.target.value}`;
    }
  }
  
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('query');
    if (query) {
      updateSearchQuery(query);
    }
  }, [ ]);

  return (
    <nav className={ styles.Navbar }>
      <Link href="/"><a>
        <div className={ styles.LogoContainer } >
          <img src="/logo.png" className={ styles.BigLogo } />
          <img src="/icon.png" className={ styles.SmallLogo } />
        </div></a>
      </Link>
      <div className={ styles.SearchBarContainer }>
        <input onKeyUp={handleSubmit} value={searchQuery} type="text" placeholder="Szukaj" className={ styles.SearchBar } onChange={ e => handleSearch(e) } />
        
        <a href={`/?query=${ searchQuery }`}><button className={ styles.SearchButton }>
          <FontAwesomeIcon icon={ faSearch } />
        </button></a>
      </div>
    </nav>
  );
}

export default Navbar;
