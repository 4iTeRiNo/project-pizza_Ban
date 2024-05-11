import React, {Dispatch} from 'react';
import {Footer} from 'antd/es/layout/layout';
import styles from './ListArea.module.css';

import {Flex, Pagination, Typography} from 'antd';
import {CardDish} from './CardDish';
import {Recipe} from '../../types/recipes';
import useTable from '../../hooks/UsePage';
interface ContentAreaProps {
  sliceData: Recipe[];
  length: number;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  numberCard: number;
}

export const ContentArea = ({sliceData, length, numberCard, setPage, page}: ContentAreaProps) => {
  const {slice} = useTable(sliceData, page, numberCard);

  return (
    <>
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
        {slice.map((item) => {
          return (
            <CardDish
              key={item.id}
              image={item.image}
              cuisine={item.cuisine}
              cookTimeMinutes={item.cookTimeMinutes}
              difficulty={item.difficulty}
              instructions={item.instructions}
              mealType={item.mealType}
              name={item.name}
              id={item.id}
            />
          );
        })}
      </Flex>
      <Footer className={styles.footer}>
        <Pagination
          defaultCurrent={page}
          pageSize={numberCard}
          total={length}
          onChange={(value) => setPage(value)}
        />
      </Footer>
    </>
  );
};
