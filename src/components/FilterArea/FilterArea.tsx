import {Header} from './Header';
import styles from './FilterArea.module.css';
import {Input} from './Input';
import {Additional} from './Additional/Additional';
import {Flex} from 'antd';

export const FilterArea = () => (
  <Flex className={styles.filterArea}>
    <Header />
    <Input />
    <Additional />
  </Flex>
);
