import React from 'react'
import '../App.css'

// type of transactions trans[]
type Props = {
    name: string,
    amount: number,
    id: number,
}

const IncomeExpense: React.FC<any> = ({ transactions }) => {


    const amounts = transactions.map((obj: any) => {
        return obj.amount
    })

    const income = amounts
        .filter((item: number) => item > 0)
        .reduce((acc: number, item: number) => (acc += item), 0)
        .toFixed(2);

    const expense = (amounts
        .filter((item: number) => item < 0)
        .reduce((acc: number, item: number) => (acc += item), 0) *
        -1
    ).toFixed(2);

    // console.log('amounts ', amounts)
    // console.log('income ', income)
    // console.log('expense ', expense)

    return (
        <div className='income-expense'>
            <div className='income'>
                <h3>Income</h3>
                <p> ${income} </p>
            </div>

            <div className='expense'>
                <h3>Expense</h3>
                <p> ${expense} </p>
            </div>
        </div>
    )
}

export default IncomeExpense
