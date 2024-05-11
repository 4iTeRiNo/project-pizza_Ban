import {Flex, Radio, RadioChangeEvent, Select} from 'antd';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/dispatchRedux';
import styles from './Input.module.css';
import {getUniqValue} from '../../../utils/getUniqValue';
import {filterValueDifficulty} from '../../../store/action';
import {Difficulty} from '../../../types/searchValue';
import {getAllTreeItems} from '../../../utils/getAllTreeItem';

export const Input = () => {
  // const [difficulty, setDifficulty] = useState<string>();
  const dispatch = useAppDispatch();
  const [] = useState();

  const listData = useAppSelector((state) => state.recipeBook.list);
  const onChange1 = ({target}: RadioChangeEvent) => {
    console.log(target.value);
    dispatch(filterValueDifficulty({difficulty: target.value}));
  };
  const handleChange = (value: {value: string; label: React.ReactNode}) => {
    // console.log(value.value );
  };

  return (
    <>
      {listData.map((value, index) => {
        const recipes = value.recipes;
        let cuisine = getUniqValue(getAllTreeItems(recipes?.map((el) => el.cuisine)));
        const difficulty = getUniqValue(recipes?.map((el) => el.difficulty));
        const mealType = getUniqValue(getAllTreeItems(recipes?.map((el) => el.mealType)));

        return (
          <Flex
            key={index}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                <Radio.Button
                  key={index}
                  value={'All'}
                  onChange={onChange1}
                >
                  {'All'}
                </Radio.Button>
                {difficulty.map((value, index) => (
                  <Radio.Button
                    key={index}
                    value={value}
                    onChange={onChange1}
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
        );
      })}
    </>
  );
};
