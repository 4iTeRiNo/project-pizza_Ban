import {Flex, Radio, Select} from 'antd';
import {useState} from 'react';
import {useAppSelector} from '../../../hooks/dispatchRedux';
import {getAllTreeItems} from '../../../utils/gelAllTreeItem';
import styles from './Input.module.css';

// interface InputProps {}

export const Input = () => {
  const [] = useState();
  const [] = useState();

  const [recipes] = useAppSelector((state) => state.recipeBook.list);

  const kitchen = Array.from(new Set(recipes?.recipes?.map((el) => el.cuisine)));
  const dish = recipes?.recipes?.map((el) => el.mealType);
  const difficulty = Array.from(new Set(recipes?.recipes?.map((el) => el.difficulty)));
  const setDish = Array.from(new Set(getAllTreeItems(dish)));

  // const onChange = (value: string) => {
  //   value;
  // };

  // const onSearch = (value: string) => {
  //   value;
  // };

  return (
    <Flex
      vertical
      className={styles.flexWrapper}
    >
      <Flex
        justify='space-between'
        gap='0.5rem'
      >
        <span className={styles.text}> Кухня :</span>
        <Select
          showSearch
          defaultValue={{value: 'Все страны и регионы', label: 'Все страны и регионы'}}
          options={kitchen.map((el) => ({value: el, label: el}))}
          labelInValue
          className={styles.select}
        />
      </Flex>
      <Flex
        justify='space-between'
        gap='0.5rem'
      >
        <span className={styles.text}>Тип блюда : </span>
        <Select
          labelInValue
          showSearch
          defaultValue={{value: 'Все типы', label: 'Все типы'}}
          options={setDish.map((el) => ({value: el, label: el}))}
          className={styles.select}
        />
      </Flex>
      <Flex
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
          <Radio.Button value={difficulty[0]}>{difficulty[0]}</Radio.Button>
          <Radio.Button value={difficulty[1]}>{difficulty[1]}</Radio.Button>
          <Radio.Button value='Hard'>Hard</Radio.Button>
        </Radio.Group>
      </Flex>
      <button className={styles.btn}>Сбросить все фильтры</button>
    </Flex>
  );
};
