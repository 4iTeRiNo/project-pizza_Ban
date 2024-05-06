import {Flex, Typography} from 'antd';
import styles from './ListArea.module.css';
import {Content} from 'antd/es/layout/layout';
import {CardDish} from './CardDish';
import {useAppSelector} from '../../hooks/dispatchRedux';

interface ListAreaProps {}

export const ListArea = ({}: ListAreaProps) => {
  const [Allrecipes] = useAppSelector((state) => state.recipeBook.list);

  const recipes = Allrecipes?.recipes;

  return (
    <Content className={styles.listArea}>
      <Typography.Title
        level={3}
        className={styles.headerText}
      >
        Найденные рецепты {recipes?.length}{' '}
      </Typography.Title>
      <Flex
        gap='0.75rem'
        className={styles.cardWrapper}
      >
        {recipes &&
          recipes?.map((value) => {
            return (
              <CardDish
                key={value.id}
                image={value.image}
                cuisine={value.cuisine}
                cookTimeMinutes={value.cookTimeMinutes}
                difficulty={value.difficulty}
                instructions={value.instructions}
                mealType={value.mealType}
                name={value.name}
              />
            );
          })}
      </Flex>
    </Content>
  );
};
