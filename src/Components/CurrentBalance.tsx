import React from 'react'
import '../App.css'

type Props = {
    balance: number
}

const CurrentBalance: React.FC<Props> = ({ balance }) => {
    return (
        <div className='balance-div'>
            <h2>Current Balance</h2>
            <h2> ${balance} </h2>
        </div>
    )
}

export default CurrentBalance
