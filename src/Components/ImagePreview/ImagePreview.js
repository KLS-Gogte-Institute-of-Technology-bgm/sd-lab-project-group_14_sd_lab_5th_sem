import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import './ImageP.css';


const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    maxWidth: 445,
  },
  media: {
    // height: 300,
    width: 500,
    height: 400,
    padding: '0%', // 16:9,
    marginTop:'100',
    
  },
});


export default function MediaCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= "https://upload.wikimedia.org/wikipedia/commons/3/34/Charlie_Chaplin_portrait.jpg"
          title="Contemplative Reptile"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            Preview
          </Typography>
        </CardContent> */}
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Color it
        </Button>
        <Button size="small" color="Secondary">
          Download
        </Button>
      </CardActions>
    </Card>
  );
}
