import styles from './Pagination.module.css';
import right from '../../../assets/right.svg';
import left from '../../../assets/left.svg';
import {Dispatch} from 'react';

interface PaginationProps {
  page: number;
  range: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({page, range, setPage}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={page === 1}
        className={styles.button}
        onClick={() => setPage(page - 1)}
      >
        <img
          className={styles.icon}
          src={left}
          width='16px'
          alt='icon'
        />
      </button>
      <button
        disabled={page === range}
        className={styles.button}
        onClick={() => setPage(page + 1)}
      >
        <img
          className={styles.icon}
          src={right}
          width='16px'
          alt='icon'
        />
      </button>
    </div>
  );
};
export default Pagination;
