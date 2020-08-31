import React, { useState } from 'react';
import './App.css';
// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// import components
import Header from './Components/Header';
import CurrentBalance from './Components/CurrentBalance';
import IncomeExpense from './Components/IncomeExpense';
import History from './Components/History'

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  grid: {
    flex: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

// type of transactions trans[]
type Obj = {
  name: string,
  amount: number,
  id: number,
}

function App() {
  const classes = useStyles();

  const [balance, setBalance] = useState<number>(0); //current balance
  const [transactions, setTransactions] = useState<Obj[]>([])

  // form states onchange
  const [usrText, setUsrText] = useState<string>('');
  const [usrAmount, setUsrAmount] = useState<number>(0);
  const [id, setID] = useState<number>(Math.random());

  // submit event
  function submitHandler(event: any) {
    event.preventDefault()
    setTransactions(
      [...transactions,
      {
        name: usrText,
        amount: usrAmount,
        id: id,
      }
      ]
    )

    setUsrText('')
    setUsrAmount(0)
    setID(Math.random())
  }


  return (
    <div className="App">
      <Grid container spacing={1} className={classes.root} >
        <Grid item xs={12} sm={12} className={classes.grid}>
          <Header />
          <CurrentBalance balance={balance} />
          <IncomeExpense transactions={transactions} />
          <History transactions={transactions} />

          {/* form */}
          <div className='form-component'>
            <h2>Add New Transaction</h2>
            <form
              onSubmit={submitHandler}
              className='form'>
              <div>
                <InputLabel >Text
                    </InputLabel>
                <Input onChange={(e) => {
                  setUsrText(e.target.value)
                }}
                  type="text"
                  value={usrText}
                  required />
              </div>

              <div>
                <InputLabel>Amount
                    </InputLabel>
                <Input onChange={(e) => {
                  setUsrAmount(Number(e.target.value))
                }}
                  type='number'
                  value={usrAmount}
                  required
                />
              </div>
              <Button type='submit' variant="outlined" size="small" color="secondary" className={classes.margin}>
                Add Transaction
                </Button>
            </form>
          </div>

        </Grid>
      </Grid>
    </div>
  );
}

export default App;
