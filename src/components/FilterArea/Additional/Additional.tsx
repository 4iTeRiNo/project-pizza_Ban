import styles from './Additional.module.css';
import {Flex} from 'antd';

interface AdditionalProps {}

export const Additional = ({}: AdditionalProps) => (
  <Flex
    vertical
    className={styles.templateName}
  >
    А еще можно попробовать на вкус удачу
    <button className={styles.lucky}>Мне повезет</button>
  </Flex>
);
