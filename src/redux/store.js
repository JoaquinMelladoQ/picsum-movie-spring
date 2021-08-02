import { 
  createStore, 
  applyMiddleware, 
  combineReducers, 
  compose 
} from 'redux';
import thunk from 'redux-thunk';
import apiReducer from './reducers/api';

const rootReducer = combineReducers({
  apiReducer,
});

const composeEnhancers = 
  (typeof window !== 'undefined' 
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) 
    || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
