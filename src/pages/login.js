import React,{ Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from 'react-router-dom';


import AppIcon from '../images/VTC_logo.png';

//MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import theme from "../util/theme";

//Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles ={
    ...theme
};

class login extends Component{
    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }

    handleSubmit =(event) =>{
        event.preventDefault();//not to show details entered in link (probably)

        const userData ={
          email: this.state.email,
          password: this.state.password
        };
        this.props.loginUser(userData, this.props.history);
    };

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    render() {
        const {classes, UI:{loading}} =this.props;
        const { errors} = this.state;

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
                            error={!!errors.email}
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
                            error={!!errors.password}
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth/>
                        {/*{errors.general && (*/}
                        {/*    <Typography variant='body2' className={classes.customerr}>*/}
                        {/*        {errors.general}*/}
                        {/*    </Typography>*/}
                        {/*)}*/}
                        <Button type='submit' variant='contained' color='primary' className={classes.button}>Log in</Button>
                        <br/>
                        <small>
                            Already have an account ? login <Link to='/signup'>here</Link>
                        </small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login));