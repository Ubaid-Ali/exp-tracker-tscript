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
}

const History: React.FC<Props> = ({ transactions }) => {
    const classes = useStyles();


    return (
        <div  >
            <div >
                {transactions.map((arr: any) => {
                    return (
                        <div className='history' key={arr.id}>
                            <p>{arr.name}</p>
                            <p>${arr.amount}</p>
                            <p>${arr.id}</p>

                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default History
