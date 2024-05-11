import {useState} from 'react';
import useResizeObserver from '../../hooks/UseResize';
import {SCREEN_MD, SCREEN_XL} from '../../constants/screenConstant';
import {useAppSelector} from '../../hooks/dispatchRedux';
import {ContentArea} from './Content';
import {Content} from 'antd/es/layout/layout';
import styles from './ListArea.module.css';
import {Recipe} from '../../types/recipes';
import {selectorAllRecipe} from '../../store/recipeSlice';

export const ListArea = () => {
  const listData = useAppSelector((state) => selectorAllRecipe(state.recipeBook));

  const [numberCard, setNumberCard] = useState(6);
  const [page, setPage] = useState(1);
  let filterRecipe: Recipe[] = [];
  filterRecipe = listData?.filter((el) => el.difficulty);
  const length = filterRecipe?.length;

  const onResize = (target: HTMLDivElement) => {
    const width = target.offsetWidth;

    if (width > SCREEN_XL) return setNumberCard(6);

    return width > SCREEN_MD ? setNumberCard(4) : setNumberCard(2);
  };

  const cardNumber = useResizeObserver(onResize);

  return (
    <>
      return (
      <Content
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
    </>
  );
};
