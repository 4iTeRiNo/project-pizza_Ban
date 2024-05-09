import styles from './Header.module.css';
import cookHeader from '../../../assets/cook_Time.jpg';
import {Flex} from 'antd';

export const Header = () => (
  <Flex className={styles.header}>
    <img
      className={styles.image}
      width='369px'
      height='160px'
      src={cookHeader}
      alt=''
    />
    <p className={styles.textWrap}>
      <span>
        В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема
        пищи становится все более сложной.
      </span>
      <span>
        Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом
        мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие
        этого решения?
      </span>
      <span>Наш сервис поможет: выбирайте параметры - и вперед!</span>
    </p>
  </Flex>
);
