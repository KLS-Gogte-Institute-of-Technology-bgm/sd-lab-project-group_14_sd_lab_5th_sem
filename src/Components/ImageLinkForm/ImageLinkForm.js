import React from 'react';
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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField mt='10rem' id="outlined-basic" label="Enter URL of image" variant="outlined" />
      <Button variant="contained" size="medium" color="primary" className={classes.margin}>
          Detect
      </Button>
    </form>
  );
}