import React from 'react';
import styles from './Paginator.module.css';

let Paginator = ({totalUsersCount: totalItemsCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  };

  let curP = currentPage;
  let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return <>
      <div className={styles.paginator}>
        {slicedPages.map((p) => {
          <span key={p.id} className={currentPage === p && styles.selectedPage}
            onClick={() => { onPageChanged(p); }}>{p}</span>;
        })}
      </div>
      </>
}

export default Paginator;