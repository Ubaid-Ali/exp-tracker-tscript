import React from 'react'
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


const Form = () => {
    const classes = useStyles();

    return (
        <div className='form-component'>
            <h2>Add New Transaction</h2>
            <form className='form'>
                <div>
                    <InputLabel >Text
                    </InputLabel>
                    <Input type="text" />
                </div>

                <div>
                    <InputLabel>Amount
                    </InputLabel>
                    <Input type='number' />
                </div>
                <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                    Add Transaction
                </Button>
            </form>
        </div>
    )
}

export default Form
