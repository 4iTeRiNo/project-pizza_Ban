import {Flex, Pagination, Typography} from 'antd';
import styles from './ListArea.module.css';
import {Content, Footer} from 'antd/es/layout/layout';
import {CardDish} from './CardDish';
import {useCallback, useState} from 'react';
import useTable from '../../hooks/UsePage';
import {Recipes} from '../../types/recipes';
import useResizeObserver from '../../hooks/UseRize';
import {SCREEN_MD, SCREEN_XL} from '../../constants/screenConstant';

interface ListAreaProps {
  allRecipes: Recipes[];
}

export const ListArea = ({allRecipes}: ListAreaProps) => {
  const [numberCard, setNumberCard] = useState(6);
  const [page, setPage] = useState(1);
  const length = allRecipes.length;

  const onResize = useCallback(
    (target: HTMLDivElement) => {
      const width = target.offsetWidth;

      if (width > SCREEN_XL) return setNumberCard(6);

      return width > SCREEN_MD ? setNumberCard(4) : setNumberCard(2);
    },
    [numberCard],
  );

  const cardNumber = useResizeObserver(onResize);
  const {slice} = useTable(allRecipes, page, numberCard);
  console.log(numberCard);

  return (
    <Content
      ref={cardNumber}
      className={styles.listArea}
    >
      <Typography.Title
        level={3}
        className={styles.headerText}
      >
        Найденные рецепты {length}
      </Typography.Title>
      <Flex
        gap='0.75rem'
        className={styles.cardWrapper}
      >
        {allRecipes &&
          slice?.map((value) => {
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
      <Footer
        className={styles.footer}
        children={
          <Pagination
            defaultCurrent={page}
            defaultPageSize={numberCard}
            total={length}
            onChange={(value) => setPage(value)}
          />
        }
      />
    </Content>
  );
};
