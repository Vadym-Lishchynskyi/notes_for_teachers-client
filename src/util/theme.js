import blue from "@material-ui/core/colors/blue";

export default {
    palette: {
        primary: blue,
        secondary: {
            main: '#448aff',
        }
    },
    typography:{
        useNextVariants: true
    },
    form:{
        textAlign:'center'
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
    },
    paper: {
        padding: 20
    },
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left: '70%'
            }
        },
        '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
                verticalAlign: 'middle'
            },
            '& a': {
                color: '#00bcd4'
            }
        },
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button': {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },
    buttons: {
        textAlign: 'center',
        '& a': {
            margin: '20px 10px'
        }
    }
}

