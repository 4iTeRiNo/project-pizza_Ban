import {ClockCircleOutlined} from '@ant-design/icons';
import {Flex, Image, Rate, Typography} from 'antd';
import {Recipes} from '../../../types/recipes';
import {getDifficulty} from '../../../utils/getDifficulty';
import styles from './CardDish.module.css';

export interface CardDishProps
  extends Pick<
    Recipes,
    'cookTimeMinutes' | 'mealType' | 'difficulty' | 'name' | 'cuisine' | 'image' | 'instructions'
  > {}

export const CardDish = (props: CardDishProps) => {
  return (
    <div className={styles.cardDish}>
      <Flex
        vertical
        gap='1rem'
      >
        <Typography.Title
          className={styles.textName}
          style={{width: '226px', padding: '1.375rem 1.5rem', margin: '0', color: '#000'}}
          level={3}
        >
          {props.name}
        </Typography.Title>
        <Image
          className={styles.image}
          width={226}
          height={294}
          src={props.image}
        />
      </Flex>
      <Flex
        className={styles.infoBody}
        vertical
        gap='0,5rem'
      >
        <Typography.Text className={styles.textDescription}>{props.instructions}</Typography.Text>
        <Flex
          vertical
          gap='0.5rem'
        >
          <Flex gap='1rem'>
            <ClockCircleOutlined />
            <Typography.Text>{props.cookTimeMinutes} minutes</Typography.Text>
          </Flex>
          <Flex
            gap='middle'
            vertical
          >
            <Rate
              count={3}
              disabled
              value={getDifficulty(props.difficulty)}
            />
          </Flex>
          <Typography.Text>{props.cuisine}</Typography.Text>
          <Typography.Text>{props.mealType.join(',')}</Typography.Text>
        </Flex>
      </Flex>
    </div>
  );
};
