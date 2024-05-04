import {combineReducers} from 'redux';
import recipeReducer from './recipeSlice';

const rootReducer = combineReducers({
  recipeBook: recipeReducer,
});

export default rootReducer;
