import {Header} from './Header';
import styles from './FilterArea.module.css';
import {Input} from './Input';
import {Additional} from './Additional/Additional';

export const FilterArea = () => (
  <div className={styles.FilterArea}>
    <Header />
    <Input />
    <Additional />
  </div>
);
