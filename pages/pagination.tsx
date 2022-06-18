import type { NextPage } from 'next';

import styles from '../styles/Pagination.module.css';
import { useEffect, useState } from 'react';
import { VideosPerPage } from '../src/helpers/ApiConfig';

interface IVideosProps {
  items: number,
  changePage: Function,
};

const Pagination: NextPage<IVideosProps> = (props: IVideosProps) => {
  let [ buttons, updateButtons ] = useState<number[ ]>([ ]);
  let [ currentPage, updateCurrentPage ] = useState<number>(1);

  useEffect(() => {
    const _buttons = [ ];
    for (let i = 1; i <= Math.ceil(props.items / VideosPerPage); i += 1) {
      _buttons.push(i);
    }
    updateButtons(_buttons);
    updateCurrentPage(1);
  }, [ props.items ]);

  const changePage = (page: number) => {
    updateCurrentPage(page);
    props.changePage(page);
  }

  return (
    <div className={ styles.Container } >
      {
        buttons
          .map((i: number) =>
            <button onClick={ () => changePage(i) } className={ i === currentPage ? styles.activeButton : styles.button } key={ i }>{ i }</button>
          )
      }
    </div>
  );
}

export default Pagination;
