import React, { useState } from 'react';
import './App.css';
// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './Components/Header';
import CurrentBalance from './Components/CurrentBalance';
import IncomeExpense from './Components/IncomeExpense';
import History from './Components/History'
import Form from './Components/Form';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  grid: {
    flex: 1,
  }
}));

type trans = {
  name: string,
  amount: number,
  id: number,
}


function App() {
  const classes = useStyles();

  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([
    { name: 'Shoes', amount: 125, id: Math.random() },
    { name: 'Pocket', amount: 175, id: Math.random() },
  ])



  return (
    <div className="App">
      <Grid container spacing={1} className={classes.root} >
        <Grid item xs={12} sm={12} className={classes.grid}>
          <Header />
          <CurrentBalance balance={balance} />
          <IncomeExpense income={income} expense={expense} />
          <History transactions={transactions} />
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
