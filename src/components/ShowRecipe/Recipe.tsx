import {Card, Col, Flex, Image, Row, Timeline, Typography} from 'antd';
import styles from './Recipe.module.css';
import ArrowLeftOutlined from '@ant-design/icons/lib/icons/ArrowLeftOutlined';
import Pagination from './Pagination/Pagination';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/dispatchRedux';
import {useState} from 'react';

export const Recipe = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [allRecipes] = useAppSelector((state) => state.recipeBook.list);
  const [page, setPage] = useState(Number(id));
  const recipeId = allRecipes?.recipes[page - 1];

  const tags = recipeId?.tags.map((el) => {
    return {el: `#${el}`};
  });

  const range = allRecipes?.recipes.length;
  const stepInstructions = recipeId?.instructions.map((el) => {
    return {
      children: el,
    };
  });

  return (
    <Flex
      className={styles.showRecipe}
      vertical
      gap={12}
    >
      <Row>
        <Col
          span={24}
          className={styles.header}
        >
          <ArrowLeftOutlined
            className={styles.buttonBack}
            onClick={() => navigate(-1)}
            style={{color: '#000', width: '20px', height: '20px'}}
          />
          <Typography.Title>{recipeId?.name}</Typography.Title>
        </Col>
      </Row>
      <Row
        justify='space-between'
        gutter={[16, 16]}
      >
        <Col span={6}>
          <Flex
            vertical
            gap='1rem'
            style={{height: '100%'}}
          >
            <Card
              title='Кухня'
              size='small'
            >
              <p>{recipeId?.cuisine}</p>
            </Card>
            <Card
              title='Теги'
              size='small'
            >
              <p>{tags?.map((el) => el.el)}</p>
            </Card>
            <Card
              title='Каллорийность'
              size='small'
            >
              <p>{recipeId?.caloriesPerServing}</p>
            </Card>
            <Card
              title='Количесво порций'
              size='small'
            >
              <p>{recipeId?.servings}</p>
            </Card>
            <Card
              title='Описание'
              size='small'
              style={{height: '100%'}}
            >
              <p>{recipeId?.instructions}</p>
            </Card>
          </Flex>
        </Col>
        <Col span={6}>
          <Flex
            vertical
            gap='1rem'
            style={{height: '100%'}}
          >
            <Card
              title='Общее время приготовления'
              size='small'
            >
              <p>{recipeId?.cookTimeMinutes}</p>
            </Card>
            <Card
              title='Инструкции по приготовлению'
              size='small'
              style={{height: '100%'}}
            >
              <Timeline items={stepInstructions} />
            </Card>
          </Flex>
        </Col>
        <Col
          span={12}
          flex='aut'
          className={styles.paginationWrapper}
        >
          <Image
            preview={false}
            width={760}
            src={recipeId?.image}
            className={styles.image}
          />
          <Pagination
            range={range}
            setPage={setPage}
            page={page}
          />
        </Col>
      </Row>
    </Flex>
  );
};
