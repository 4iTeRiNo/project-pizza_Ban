import {useState} from 'react';
import useResizeObserver from '../../hooks/UseResize';
import {SCREEN_MD, SCREEN_XL} from '../../constants/screenConstant';
import {useAppSelector} from '../../hooks/dispatchRedux';
import {ContentArea} from './Content';
import {Content} from 'antd/es/layout/layout';
import styles from './ListArea.module.css';
import {Recipe} from '../../types/recipes';
import {selectorAllFilters, selectorAllRecipe} from '../../store/recipeSlice';

export const ListArea = () => {
  const listData = useAppSelector((state) => selectorAllRecipe(state.recipeBook));
  const filters = useAppSelector((state) => selectorAllFilters(state.recipeBook));
  const [Cuisine, MealType, Difficulty] = filters.map((el) => el.value);

  const [numberCard, setNumberCard] = useState(6);
  const [page, setPage] = useState(1);

  let filterRecipe: Recipe[] = [];

  filterRecipe = listData.filter((el) =>
    Difficulty === 'All' && Cuisine === 'All' && MealType === 'All'
      ? el
      : Cuisine === 'All' && MealType === 'All'
      ? el.difficulty === Difficulty
      : Cuisine === 'All' && Difficulty === 'All'
      ? el.mealType.some((value) => value === MealType)
      : Difficulty === 'All' && MealType === 'All'
      ? el.cuisine === Cuisine
      : Cuisine === 'All'
      ? el.difficulty === Difficulty && el.mealType.some((value) => value === MealType)
      : MealType === 'All'
      ? el.difficulty === Difficulty && el.cuisine === Cuisine
      : Difficulty === 'All'
      ? el.cuisine === Cuisine && el.mealType.some((value) => value === MealType)
      : el.difficulty === Difficulty &&
        el.cuisine === Cuisine &&
        el.mealType.some((value) => value === MealType),
  );
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
