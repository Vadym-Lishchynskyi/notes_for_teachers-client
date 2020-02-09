import React,{ Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import axios from 'axios';

import AppIcon from '../images/VTC_logo.png';

//MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const styles ={
    form:{
        textAlign:'center',

    },
    img:{
        width:150,
        height:150,
        margin: '5px auto',
    },
    pageTitle:{
        margin: '5px auto',
    },
    textField:{
        margin: '7px auto',
    },
    button:{
        marginTop:10,
    }
};

class login extends Component{
    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
            loading: false,
            errors: {}
        }
    }

    handleSubmit =(event) =>{
        event.preventDefault();//not to show details entered in link (probably)
        this.setState({
            loading:true
        });
        const userData ={
          email: this.state.email,
          password: this.state.password
        };
        axios.post('/login', userData)
            .then(res=>{
                console.log(res.data);
                this.setState({
                    loading:false
                });
                this.props.history.push('/');
            })
            .catch(err=>{
                this.setState({
                    error : err.response.data,
                    loading:false
                })
            })
    };

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    render() {
        const {classes} =this.props;
        const { errors, loading} = this.state;

        return(
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img src={AppIcon} alt="logo" className={classes.img}/>
                    <Typography variant='h3' className={classes.pageTitle}>Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            id='email'
                            name='email'
                            type='email'
                            label='Email'
                            className={classes.textField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth/>
                        <TextField
                            id='password'
                            name='password'
                            type='password'
                            label='Password'
                            className={classes.textField}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth/>
                        <Button type='submit' variant='contained' color='primary' className={classes.button}>Log in</Button>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

login.protoType ={
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);