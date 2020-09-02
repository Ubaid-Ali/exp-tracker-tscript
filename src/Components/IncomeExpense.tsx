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
                <p>Income</p>
                <p> ${income} </p>
            </div>

            <div className='expense'>
                <p>Expense</p>
                <p> $-{expense} </p>
            </div>
        </div>
    )
}

export default IncomeExpense
