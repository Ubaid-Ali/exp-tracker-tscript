import React from 'react'
import '../App.css'

type Props = {
    income: number,
    expense: number,
} 

const IncomeExpense: React.FC<Props> = ({ income, expense }) => {


    // const amounts = transactions.map((obj: any) => {
    //     return obj.amount
    // })

    // const income: number = Number(amounts
    //     .filter((item: number) => item > 0)
    //     .reduce((acc: number, item: number) => (acc += item), 0)
    //     .toFixed(2));

    // const expense: number = Number((amounts
    //     .filter((item: number) => item < 0)
    //     .reduce((acc: number, item: number) => (acc += item), 0) *
    //     -1
    //     ).toFixed(2));

    // console.log('amounts ', typeof (amounts), amounts)
    // console.log('income ', typeof (income), income)
    // console.log('expense ', typeof (expense), expense)

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
