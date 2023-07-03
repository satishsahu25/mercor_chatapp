import {configureStore} from '@reduxjs/toolkit'
import messagereducer from './reducers/message/messageslice';

export const store=configureStore({
    reducer:{
        message:messagereducer,
    }
});