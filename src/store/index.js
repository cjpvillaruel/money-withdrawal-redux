import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { username: 'Janny', totalAmount: 250070 };
const store = createStore(reducer, initialState);
export default store;
