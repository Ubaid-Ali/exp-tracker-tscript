import React from 'react'
import '../App.css'

import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    root: {
        // textAlign: 'center',
    },
}));

type Props = {
    transactions: {
        name: string,
        amount: number,
        id: number,
    }[]
    callBack: any
}

const History: React.FC<Props> = ({ transactions, callBack }) => {
    const classes = useStyles();


    return (
        <div className={classes.root} >
            <ul className='history-ul' >
                {transactions.map((arr: any) => {
                    return (
                        <li className='history-li' key={arr.id}>
                            <span>{arr.name}</span>
                            <span>${arr.amount}</span>
                            <button onClick={callBack} id={arr.id} className='delete-icon-button'>
                                <DeleteIcon className='delete-icon' />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default History
