import {Flex, Radio, Select} from 'antd';
import {useState} from 'react';
import {useAppSelector} from '../../../hooks/dispatchRedux';
import styles from './Input.module.css';
import {getUniqValue} from '../../../utils/getUniqValue';

export const Input = () => {
  const [] = useState();
  const [] = useState();

  const listData = useAppSelector((state) => state.recipeBook.list);

  // const onChange = (value: string) => {
  //   value;
  // };

  // const onSearch = (value: string) => {
  //   value;
  // };

  return (
    <>
      {listData.map((value, index) => {
        const recipes = value.recipes;
        const cuisine = getUniqValue(recipes.map((el) => el.cuisine));
        const difficulty = getUniqValue(recipes.map((el) => el.difficulty));
        const mealType = getUniqValue(recipes.map((el) => el.mealType.join(',')));

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
                defaultValue={{value: 'Все страны и регионы', label: 'Все страны и регионы'}}
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
                defaultValue={{value: 'Все типы', label: 'Все типы'}}
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
                <Radio.Button value='All'>All</Radio.Button>
                {difficulty.map((value, index) => (
                  <Radio.Button
                    key={index}
                    value={value}
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
