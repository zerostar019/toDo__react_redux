import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import task from './entities/tasks/index'


export const store = configureStore({
    reducer: {
        task
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
    ]
});