import {useEffect} from 'react';
import './App.css';
import {useAppDispatch} from './hooks/dispatchRedux';
import {fetchRecipe} from './store/thunks';
import {FilterArea} from './components/FilterArea';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  return <FilterArea />;
}

export default App;
