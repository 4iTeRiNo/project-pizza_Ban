import {useEffect} from 'react';
import './App.css';
import {useAppDispatch} from './hooks/dispatchRedux';
import {fetchRecipe} from './store/thunks';
import {FilterArea} from './components/FilterArea';
import {ListArea} from './components/ListArea';
import {Layout} from 'antd';
const {Header} = Layout;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);
  // const allRecipes = useAppSelector((state) => state.recipeBook.list);
  // console.log(allRecipes);

  return (
    <Layout style={{padding: '1rem', containerType: 'inline-size'}}>
      <Header className='headerText'>Сборник рецептов из разных стран мира</Header>
      <Layout style={{flexDirection: 'row', gap: '0.75rem', marginTop: '1rem'}}>
        <FilterArea />
        <ListArea />
      </Layout>
    </Layout>
  );
}

export default App;
