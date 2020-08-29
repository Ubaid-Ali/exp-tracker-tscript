import React from 'react'

type Props = {
    balance: number
}

const CurrentBalance: React.FC<Props> = ({balance}) => {
    return (
        <div>
            <h2>Current Balance</h2>
            <p> ${balance} </p>
        </div>
    )
}

export default CurrentBalance
