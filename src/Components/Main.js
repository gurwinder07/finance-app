import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Quotes from './files/Quotes'
import Forex from './files/Forex'
import '../App.css'
function TabContainer(props) {
  return (
    <Typography component="div"className="Header">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: 'grey',
  },
});
class Main extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}  centered>
            <Tab label="Quotes" />
            <Tab label="FX" />
            <Tab label="Trends" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Quotes /></TabContainer>}
        {value === 1 && <TabContainer><Forex /></TabContainer>}
        {value === 3 && <TabContainer><Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>/></TabContainer>}

      </div>

    );
  }
}
Main.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Main);
