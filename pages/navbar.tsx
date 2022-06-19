import type { NextPage } from 'next';

import styles from '../styles/Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

interface ISearchProps {
  search: Function,
  changeAppearance: Function,
};

const Navbar: NextPage<ISearchProps> = (props: ISearchProps) => {
  const [ searchQuery, updateSearchQuery ] = useState('');
  const [ appearanceIcon, updateAppearanceIcon ] = useState<string | null>('dark');
  useEffect(() => {
    if (localStorage.getItem('appearance')) {
      updateAppearanceIcon(localStorage.getItem('appearance'));
    }
  }, [ ]);

  const handleAppearanceClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    updateAppearanceIcon(appearanceIcon === 'dark' ? 'light' : 'dark');
    if (localStorage.getItem('appearance') === 'dark') {
      localStorage.setItem('appearance', 'light');
    } else {
      localStorage.setItem('appearance', 'dark');
    }
    props.changeAppearance(localStorage.getItem('appearance'));
  }

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
          <img src="/logo.png" className={ styles.BigLogo } alt="logo" />
          <img src="/icon.png" className={ styles.SmallLogo } alt="logo" />
        </div></a>
      </Link>
      <div className={ styles.SearchBarContainer }>
        <input onKeyUp={handleSubmit} value={searchQuery} type="text" placeholder="Szukaj" className={ styles.SearchBar } onChange={ e => handleSearch(e) } />
        
        <a href={`/?query=${ searchQuery }`}><button className={ styles.SearchButton }>
          <FontAwesomeIcon icon={ faSearch } />
        </button></a>
      </div>
      <button className={styles.ChangeAppearance} onClick={ handleAppearanceClick }><FontAwesomeIcon icon={ appearanceIcon === 'dark' ? faSun : faMoon } /></button>
    </nav>
  );
}

export default Navbar;
