import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, withTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // borderRadius: 4,
    // backgroundColor: theme.palette.common.white,
    // borderColor: "yellow !important",
    // flexBasis: 200
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
    fontWeight: "bold !important",
    fontSize: "10000px !important",
    color: "white !important"
  },
  button: {
    margin: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
    
  },
  menu: {
    width: 200,
  },

  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 0.5,
      fontSize: 30,
      color: "white"
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },




});



class ContactMe extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    // console.log("just looking", styles);

    return (
       
        <div>
        <h1 style={{fontWeight:"bold", textAlign:'center'}}>Contact Me</h1> 
        <h1 style={{fontWeight:"lighter", textAlign:'center'}}>_____</h1>
      <form className={classes.container} noValidate autoComplete="off">
        {/* <TextField
          id="outlined-name"
          label="Name"
        //   style={{ margin: 8 }}
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
 */}
        <TextField
          error
          id="outlined-error"
          label="Name"
        //   defaultValue="Hello World"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
          fullWidth
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error"
          label="Email Address"
        //   defaultValue="Hello World"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
          fullWidth
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error"
          label="Phone Number"
        //   defaultValue="Hello World"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
          fullWidth
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        
        <TextField
          error  
          id="outlined-multiline-static"
          label="Multiline"
          style={{ margin: 8 }}
          multiline
          rows="4"
        //   defaultValue="Default Value"
          className={classes.textField}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              root: classes.bootstrapRoot,
            // input: classes.bootstrapInput,
            }
          }}
          fullWidth
          margin="normal"
          variant="outlined"
        />

        <Button variant="outlined" color="inherit" className={classes.button}>
            Send Mail
        </Button>
        
      </form>
      </div>
    );
  }
}

ContactMe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactMe);