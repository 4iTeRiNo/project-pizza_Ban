import {useEffect} from 'react';
import './App.css';
import {useAppDispatch} from './hooks/dispatchRedux';
import {fetchRecipe} from './store/thunks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  return <></>;
}

export default App;
