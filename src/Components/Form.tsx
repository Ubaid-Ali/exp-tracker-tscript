import React, { useState } from 'react'
// import { Input } from '@material-ui/core';
// import { InputLabel } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     margin: {
//         margin: theme.spacing(1),
//     },
//     extendedIcon: {
//         marginRight: theme.spacing(1),
//     },
// }));


// const Form: React.FC<HTMLFontEvent> = ( {submitHandler} ) => {
//     const classes = useStyles();

//     const [text, setText] = useState<string>('')
//     const [usrAmount, setUsrAmount] = useState<number>(0)


//     return (
//         <div className='form-component'>
//             <h2>Add New Transaction</h2>
//             <form 
//             onSubmit={submitHandler}
//             className='form'>
//                 <div>
//                     <InputLabel >Text
//                     </InputLabel>
//                     <Input onChange={(e) => {
//                         setText(e.target.value)
//                     }} type="text" />
//                 </div>

//                 <div>
//                     <InputLabel>Amount
//                     </InputLabel>
//                     <Input onChange={(e) => {
//                         setUsrAmount(Number(e.target.value))
//                     }}
//                         type='number'
//                     />
//                 </div>
//                 <Button type='submit' variant="outlined" size="small" color="secondary" className={classes.margin}>
//                     Add Transaction
//                 </Button>
//             </form>
//         </div>
//     )
// }

// export default Form
