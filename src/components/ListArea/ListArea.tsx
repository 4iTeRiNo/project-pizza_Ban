import {useCallback, useState} from 'react';
import useResizeObserver from '../../hooks/UseResize';
import {SCREEN_MD, SCREEN_XL} from '../../constants/screenConstant';
import {useAppSelector} from '../../hooks/dispatchRedux';
import {ContentArea} from './Content';
import {Content} from 'antd/es/layout/layout';
import styles from './ListArea.module.css';

export const ListArea = () => {
  const listData = useAppSelector((state) => state.recipeBook.list);

  const [numberCard, setNumberCard] = useState(6);
  const [page, setPage] = useState(1);
  const [first] = listData.map((recipe) => recipe.recipes);
  const filterRecipe = first?.filter((el) => el.difficulty);

  const onResize = useCallback(
    (target: HTMLDivElement) => {
      const width = target.offsetWidth;

      if (width > SCREEN_XL) return setNumberCard(6);

      return width > SCREEN_MD ? setNumberCard(4) : setNumberCard(2);
    },
    [numberCard],
  );

  const cardNumber = useResizeObserver(onResize);

  return (
    <>
      {listData.map((value, index) => {
        const length = value.recipes.length;
        return (
          <Content
            key={index}
            ref={cardNumber}
            className={styles.listArea}
          >
            <ContentArea
              page={page}
              sliceData={filterRecipe}
              setPage={setPage}
              length={length}
              numberCard={numberCard}
            />
          </Content>
        );
      })}
    </>
  );
};
