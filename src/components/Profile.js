import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles  from "@material-ui/core/styles/withStyles";
import {Link} from "react-router-dom";
import dayjs from "dayjs";
//MUI
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import theme from "../util/theme";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

//Icons
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

//redux
import {connect} from "react-redux";


const styles ={
    ...theme
};

class Profile extends Comment{
    render(){
        const {classes, user:{ name, faculty, bio,createdAt, imageUrl, website,email, loading, authenticated}} = this.props;
        let profileMarkup = !loading ? (authenticated ? (
            <Paper className={classes.paper}>
                <div className={classes.profile}>
                    <div className="profile-image">
                        <img src={imageUrl} alt="Image"/>
                    </div>
                    <hr/>
                    <div className="profile-details">
                        <MuiLink component={Link} to={`/users/${email}`} color='primary' variant='h5'>
                            @{email}
                        </MuiLink>
                    <hr/>
                    {name && <Typography variant='body2'>{name}</Typography> }
                    <hr/>
                    {bio && <Typography variant='body2'>{bio}</Typography> }
                    <hr/>
                    {faculty && <Typography variant='body2'>{faculty}</Typography> }
                    <hr/>
                    {website && <Typography variant='body2'>{website}</Typography> }
                    <hr/>
                    {website && (
                        <Fragment>
                            <LinkIcon color='primary'/>
                            <a href={website} target='_blank' rel='noopener noreferrer'>
                                {' '}{website}
                            </a>
                            <hr/>
                        </Fragment>
                    )}
                    <CalendarToday color='primary'/> {" "}
                    <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                    </div>
                </div>
            </Paper>
        ) : (
            <Paper className={classes.paper}>
                <Typography variant='body2' align='center'>No profile found, please login again</Typography>
                <div className={classes.buttons}>
                    <Button variant='contained' color='primary' component={Link} to='/login'>Login</Button>
                    <Button variant='contained' color='secondary' component={Link} to='/signup'>Signup</Button>
                </div>
            </Paper>
        )) : (<p>loading...</p>);


        return profileMarkup;
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));






