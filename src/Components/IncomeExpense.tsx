import React from 'react'
import '../App.css'

type Props = {
    income: number,
    expense: number,
} 

const IncomeExpense: React.FC<Props> = ({ income, expense }) => {


    return (
        <div className='income-expense'>
            <div className='income'>
                <h3>Income</h3>
                <p> ${income} </p>
            </div>

            <div className='expense'>
                <h3>Expense</h3>
                <p> $-{expense} </p>
            </div>
        </div>
    )
}

export default IncomeExpense
