import {Flex, Radio, Select} from 'antd';
import {useAppDispatch, useAppSelector} from '../../../hooks/dispatchRedux';
import styles from './Input.module.css';
import {getUniqValue} from '../../../utils/getUniqValue';
import {getAllTreeItems, pushItemInArray} from '../../../utils/getAllTreeItem';
import {selectorAllRecipe, selectorAllFilters} from '../../../store/recipeSlice';
import {resetFilter, setFilter} from '../../../store/action';

export const Input = () => {
  const dispatch = useAppDispatch();
  const listData = useAppSelector((state) => selectorAllRecipe(state.recipeBook));
  const filters = useAppSelector((state) => selectorAllFilters(state.recipeBook));

  let cuisine = getUniqValue(
    pushItemInArray(
      listData?.map((el) => el.cuisine),
      'All',
    ),
  );

  const difficulty = getUniqValue(
    pushItemInArray(
      listData?.map((el) => el.difficulty),
      'All',
    ),
  );

  const mealType = getUniqValue(getAllTreeItems(listData?.map((el) => el.mealType)));
  // @ts-ignore
  mealType.unshift('All');

  const setFilters = (target: {title: string; value: string}) => {
    dispatch(setFilter({name: target.title, value: target.value}));
  };

  const onResetFilters = () => {
    dispatch(resetFilter());
  };

  return (
    <Flex
      vertical
      className={styles.flexWrapper}
    >
      {filters.map((value, index) => {
        switch (value.name) {
          case 'cuisine':
            return (
              <Flex
                key={index}
                className={styles.inputWrapper}
                justify='space-between'
                gap='0.5rem'
              >
                <span className={styles.text}> Кухня :</span>
                <Select
                  showSearch
                  onChange={setFilters}
                  defaultValue={{value: value.value, title: value.name}}
                  options={cuisine.map((el) => {
                    return {value: el, label: el, title: value.name};
                  })}
                  labelInValue
                  className={styles.select}
                />
              </Flex>
            );
          case 'mealType':
            return (
              <Flex
                key={index}
                className={styles.inputWrapper}
                justify='space-between'
                gap='0.5rem'
              >
                <span className={styles.text}>Тип блюда : </span>
                <Select
                  labelInValue
                  showSearch
                  onChange={setFilters}
                  defaultValue={{value: value.value, title: value.name}}
                  options={mealType.map((el) => {
                    return {value: el, label: el, title: value.name};
                  })}
                  className={styles.select}
                />
              </Flex>
            );
          case 'difficulty':
            return (
              <Flex
                key={index}
                className={styles.inputWrapper}
                justify='space-between'
                gap='0.5rem'
              >
                <span className={styles.text}>Сложность приготовления :</span>
                <Radio.Group
                  defaultValue={value.value}
                  buttonStyle='solid'
                  className={styles.radioGroup}
                >
                  {difficulty.map((value, index) => (
                    <Radio.Button
                      key={index}
                      value={value}
                      onChange={() => setFilters({value: value, title: 'difficulty'})}
                    >
                      {value}
                    </Radio.Button>
                  ))}
                  <Radio.Button
                    value='Hard'
                    disabled
                  >
                    Hard
                  </Radio.Button>
                </Radio.Group>
              </Flex>
            );
          default:
            return null;
        }
      })}

      <button
        className={styles.btn}
        onClick={onResetFilters}
      >
        Сбросить все фильтры
      </button>
    </Flex>
  );
};
