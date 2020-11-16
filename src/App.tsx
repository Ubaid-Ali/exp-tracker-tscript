import React, { useState } from 'react';
import './App.css';
// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// import components
import Header from './Components/Header';
import CurrentBalance from './Components/CurrentBalance';
import IncomeExpense from './Components/IncomeExpense';
import History from './Components/History'

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0% 1%'
  },
  grid: {
  },
  margin: {
    margin: theme.spacing(1),
  },

  submitPositive: {
    borderColor: '#green',
    boxShadow: '0 0 10px green',
    margin: '5%',
  },
  submitNegative: {
    borderColor: '#ab003c',
    boxShadow: '0 0 10px #ab003c',
    margin: '5%',
  }

}));


// type of transactions Obj[]
type Obj = {
  name: string,
  amount: number,
  id: number,
}


// APP Component
function App() {
  const classes = useStyles();

  // transaction list
  const [transactions, setTransactions] = useState<Obj[]>([])

  // form states onchange
  const [usrText, setUsrText] = useState<string>('');
  const [usrAmount, setUsrAmount] = useState<number>(0);
  const [id, setID] = useState<number>(Math.floor(Math.random() * 100000000));

  // Toggle Button state
  const [checked, setChecked] = useState<boolean>(false);

  // income expense Calculating
  const amounts = transactions.map((obj: Obj) => {
    return obj.amount
  })

  const income: number = Number(amounts
    .filter((item: number) => item > 0)
    .reduce((acc: number, item: number) => (acc += item), 0)
    .toFixed(2));

  const expense: number = Number((amounts
    .filter((item: number) => item < 0)
    .reduce((acc: number, item: number) => (acc += item), 0) *
    -1
  ).toFixed(2));


  // Current Balance
  const balance: number = income - expense;


  // Submit event
  function submitHandler(event: any) {
    event.preventDefault()
    let convertedInMinus: number = (usrAmount > 0 ? -usrAmount : usrAmount)
    console.log(convertedInMinus);

    setTransactions(
      [...transactions,
      {
        name: usrText,
        amount: checked ? convertedInMinus : usrAmount,
        id: id,
      }
      ]
    )
    setID(Math.floor(Math.random() * 100000000))
    setUsrText('')
  }

  const deteteTransaction = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer: number = Number(e.currentTarget.id)
    setTransactions((transactions) => (
      transactions.filter(filterFnc))
    )

    function filterFnc(obj: Obj) {
      return obj.id !== answer
    }
  }


  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  // console.log(checked)

  // Return App Component 
  return (
    <div className="App">
      <Grid container spacing={1} className={classes.root} >
        <Grid item xs={12} sm={12} className={classes.grid}>
          <Header />
          <hr/>

          <CurrentBalance balance={balance} />
          <hr/>

          <IncomeExpense income={income} expense={expense} />

          <History transactions={transactions} callBack={deteteTransaction} />
          <hr/>
          {/* form */}
          <div className='form'>
            <h3 className='form-heading' >Add New Transaction</h3>
            <form
              onSubmit={submitHandler}
              className='form'
            >

              <div className='input-div'>
                <InputLabel className='label'>
                  Text
                  <br />
                  <Input
                    onChange={(e) => {
                      setUsrText(e.target.value)
                    }}
                    type="text"
                    value={usrText}
                    required
                    className='input'
                  />
                </InputLabel>
              </div>

              <div className='input-div'>
                <InputLabel className='label'>
                  Amount
                  <br />
                  <Input
                    onChange={(e) => {
                      setUsrAmount(Number(e.target.value))
                    }}
                    type='number'
                    required
                    className='input'
                  />
                </InputLabel>
              </div>

              {/* Toggle button */}
              <FormControlLabel
                control={<Switch checked={checked} onChange={toggleChecked} />}
                label={checked ? "Negative Amount" : "Positive Amount"}
                className='toggle-btn'
              />
              <br />
              {/* submit button */}
              <Button
                type='submit'
                variant="outlined"
                size="medium"
                className={checked ? classes.submitNegative : classes.submitPositive}
                id='submit'
              >
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
