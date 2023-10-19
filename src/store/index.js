import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import thunk from 'redux-thunk'

//Reducers

import AllReducers from './reducers'

const persistConfig = {
    key: 'root',
}

const persistedReducer = persistReducer(persistConfig, AllReducers)

export const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))

const persistor = persistStore(store, {}, () => {

})

export default ConfigureStore = (props) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>{props.children}</PersistGate>
        </Provider>
    )
}
