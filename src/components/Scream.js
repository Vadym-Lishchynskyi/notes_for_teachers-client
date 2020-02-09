import React,{ Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';

//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    card:{
        display:'flex',
        marginBottom:20,
        backgroundColor:'white',

    },
    image:{
        minWidth: 200,
    },
    content:{
        padding: 25,
        margine: 15,
        
    }
};
class Scream extends Component {
  render() {
    const {classes, scream :{body, createdAt, imageUrl, userHandle, awardedAt, name, surname}} = this.props;
    return(
      <Card className ={classes.card}>
          <CardMedia 
          image ={imageUrl}
          title ='Profile image' 
          className ={classes.image}/>

          <CardContent className ={classes.content}>
             <Typography variant ='h5' component={Link} to={'/users/'+userHandle} color='primary' >{userHandle}</Typography> 
             <Typography variant ='body2' color='textSecondary'>{awardedAt}</Typography>  
             <Typography variant ='body1'>{body}</Typography>
          </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);

