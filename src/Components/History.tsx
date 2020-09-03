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
                {transactions.map((transObj: any) => {
                    return (
                        <li className={transObj.amount > 0 ? 'history-li-green' : 'history-li-red'} key={transObj.id}>
                            <span>{transObj.name}</span>
                            <span>${transObj.amount}</span>
                            <button onClick={callBack} id={transObj.id} className='delete-icon-button'>
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
