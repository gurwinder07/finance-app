import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchForex from './SearchForex'
import ResultForex from './Result';
import '../../App.css'

class Forex extends Component {
    state = {
        result: [],
        search: '',
        fetch: false,
    };

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        });
    }

    handleClick =  (e) => {
        e.preventDefault();
        let term1 = this.state.term1;
        let term2 = this.state.term2;
        const data = (term1, term2, 1)
        this.setState({result: data.data['Exchange Rate'], fetch: true})
    }

  render () {
      return (
        <Grid container spacing={24} justify='center'>
            <Grid item xs={10}>
                <Typography variant="title" gutterBottom>
                    Forex Exchange
                </Typography>
                <SearchForex onChange={ this.handleChange } onClick={ this.handleClick }/>
                {this.state.fetch && (
                    <ResultForex result={this.state.result}/>
                )}
            </Grid>
        </Grid>
      );
    }
  }

export default Forex;
