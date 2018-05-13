import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import storeErrorReducer from './storeErrorReducer';

export const rootReducer = combineReducers({
    form: formReducer,
    hasErrors: storeErrorReducer
});