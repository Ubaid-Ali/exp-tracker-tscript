import React from 'react'
import '../App.css'

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        // '& > *': {
        //     margin: theme.spacing(1),
        // },
    },
}));

type Props = {
    transactions: any
    callBack: any
}

const History: React.FC<Props> = ({ transactions, callBack }) => {
    const classes = useStyles();


    return (
        <div className={classes.root} >
            <ul >
                {transactions.map((arr: any) => {
                    return (
                        <li className='history' key={arr.id}>
                            <p>{arr.name}</p>
                            <p>${arr.amount}</p>
                            <p>${arr.id}</p>

                            <button onClick={callBack} id={arr.id}>
                                <DeleteIcon />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default History
