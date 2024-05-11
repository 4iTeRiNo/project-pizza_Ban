import {Card, Col, Flex, Image, Row, Timeline, Typography} from 'antd';
import styles from './Recipe.module.css';
import ArrowLeftOutlined from '@ant-design/icons/lib/icons/ArrowLeftOutlined';
import Pagination from './Pagination/Pagination';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/dispatchRedux';
import {useEffect, useState} from 'react';
import {fetchRecipeId} from '../../store/thunks';

export const Recipe = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const allRecipes = useAppSelector((state) => state.recipeBook.list);
  const [page, setPage] = useState(Number(id));

  const recipe = allRecipes.find((elem) => elem.id === page);

  const tags = recipe?.tags.map((el) => {
    return {el: `#${el}`};
  });

  useEffect(() => {
    // debugger;

    if (id && !allRecipes.find((el) => el.id === +id)) {
      dispatch(fetchRecipeId(id));
    }
  }, [dispatch, allRecipes, id]);
  const range = allRecipes.length;
  const stepInstructions = recipe?.instructions.map((el) => {
    return {
      children: el,
    };
  });
  // debugger;
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
            onClick={() => navigate(`/`)}
            style={{color: '#000', width: '20px', height: '20px'}}
          />
          <Typography.Title>{recipe?.name}</Typography.Title>
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
              <p>{recipe?.cuisine}</p>
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
              <p>{recipe?.caloriesPerServing}</p>
            </Card>
            <Card
              title='Количесво порций'
              size='small'
            >
              <p>{recipe?.servings}</p>
            </Card>
            <Card
              title='Описание'
              size='small'
              style={{height: '100%'}}
            >
              <p>{recipe?.instructions}</p>
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
              <p>{recipe?.cookTimeMinutes}</p>
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
            src={recipe?.image}
            className={styles.image}
          />
          <Pagination
            range={range}
            setPage={(id) => {
              setPage(id);
              navigate(`/recipe/${id}`);
            }}
            page={page}
          />
        </Col>
      </Row>
    </Flex>
  );
};
