import {applyMiddleware, createStore} from "redux";
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {storage, storageType} from "../storage";

const middlewares = [thunk];

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

store.subscribe(() => {
    if(store.getState().tasks.data.length !== 0 && !store.getState().tasks.error){
        storage.setObject(storageType.COLUMNS, store.getState().tasks.data);
    }
});