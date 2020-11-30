import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [input, setInput] = useState(''); 
  const onClick=(e)=>{
    console.log("working");
  }
  const onInputChange=(e)=>{
    console.log(e.target.value);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField mt='10rem' id="outlined-basic" label="Enter URL of image" variant="outlined" onChange={onInputChange}/>
      <Button variant="contained" size="medium" color="primary" className={classes.margin} onClick={onClick}>
          Detect
      </Button>
    </form>
  );
}