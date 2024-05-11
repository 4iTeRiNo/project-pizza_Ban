import {Flex, Radio,  Select} from 'antd';
import {useAppSelector} from '../../../hooks/dispatchRedux';
import styles from './Input.module.css';
import {getUniqValue} from '../../../utils/getUniqValue';
import {pushItemInArray} from '../../../utils/getAllTreeItem';
import {selectorAllRecipe} from '../../../store/recipeSlice';

export const Input = () => {
  // const dispatch = useAppDispatch();
  const listData = useAppSelector((state) => selectorAllRecipe(state.recipeBook));
  let cuisine = getUniqValue(
    pushItemInArray(
      listData?.map((el) => el.cuisine),
      'Все страны и регионы',
    ),
  );

  const difficulty = getUniqValue(
    pushItemInArray(
      listData?.map((el) => el.difficulty),
      'All',
    ),
  );
  const mealType = getUniqValue(
    pushItemInArray(
      listData?.map((el) => el.cuisine),
      'Все типы',
    ),
  );

  // const onChange1 = ({target}: RadioChangeEvent) => {};
  // const handleChange = (value: {value: string; label: React.ReactNode}) => {};

  return (
    <>
      <Flex
        vertical
        className={styles.flexWrapper}
      >
        <Flex
          className={styles.inputWrapper}
          justify='space-between'
          gap='0.5rem'
        >
          <span className={styles.text}> Кухня :</span>
          <Select
            showSearch
            // onChange={handleChange}
            defaultValue={{value: 'All', label: 'Все страны и регионы'}}
            options={cuisine.map((el) => {
              return {value: el, label: el};
            })}
            labelInValue
            className={styles.select}
          />
        </Flex>
        <Flex
          className={styles.inputWrapper}
          justify='space-between'
          gap='0.5rem'
        >
          <span className={styles.text}>Тип блюда : </span>
          <Select
            labelInValue
            showSearch
            // onChange={handleChange}
            defaultValue={{value: 'All', label: 'Все типы'}}
            options={mealType.map((el) => {
              return {value: el, label: el};
            })}
            className={styles.select}
          />
        </Flex>
        <Flex
          className={styles.inputWrapper}
          justify='space-between'
          gap='0.5rem'
        >
          <span className={styles.text}>Сложность приготовления :</span>
          <Radio.Group
            defaultValue='All'
            buttonStyle='solid'
            className={styles.radioGroup}
          >
            {difficulty.map((value, index) => (
              <Radio.Button
                key={index}
                value={value}
                // onChange={onChange1}
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
        <button className={styles.btn}>Сбросить все фильтры</button>
      </Flex>
    </>
  );
};
