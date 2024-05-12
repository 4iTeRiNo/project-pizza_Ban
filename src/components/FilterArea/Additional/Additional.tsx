import styles from './Additional.module.css';
import {Flex} from 'antd';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../../hooks/dispatchRedux';
import {selectorAllRecipe} from '../../../store/recipeSlice';
import {getRandomInteger} from '../../../utils/getRandomInteger';

export const Additional = () => {
  const listData = useAppSelector((state) => selectorAllRecipe(state.recipeBook));
  const length = listData.length;

  const id = getRandomInteger(1, length);
  return (
    <Flex
      vertical
      gap='1.5rem'
      className={styles.additional}
    >
      А еще можно попробовать на вкус удачу
      <Link to={`recipe/${id}`}>
        <button className={styles.lucky}>Мне повезет</button>
      </Link>
    </Flex>
  );
};
