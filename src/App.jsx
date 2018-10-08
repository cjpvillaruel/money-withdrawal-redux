import React from 'react';
import formatNumber from 'format-number';
import photographer from './images/girl.png';
import './App.css';
import store from './store';

const setWithdrawAmount = amount => ({ type: 'WITHDRAW', amount });
const dispatchBtnAction = e => {
  const { amount } = e.target.dataset;
  store.dispatch(setWithdrawAmount(amount));
};

const App = () => (
  <div className="App">
    <img className="App__userpic" src={photographer} alt="user" />
    <p className="App__username">
      Hello,
      {`${store.getState().username}!`}
    </p>
    <div className="App__amount">
      {formatNumber({ prefix: '$' })(store.getState().totalAmount)}
      <p className="App__amount--info">Total Amount</p>
    </div>

    <section className="App__buttons">
      <button type="button" data-amount="10000" onClick={dispatchBtnAction}>
        WITHDRAW $10,000
      </button>
      <button type="button" data-amount="5000" onClick={dispatchBtnAction}>
        WITHDRAW $5,000
      </button>
    </section>

    <button
      type="button"
      className="App__giveaway"
      data-amount={store.getState().totalAmount}
      onClick={dispatchBtnAction}
    >
      Give away all your cash to charity
    </button>
  </div>
);

export default App;
