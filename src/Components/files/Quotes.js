import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Search from './Search'
import axios from 'axios';
import Result from './QuoteResult';
import '../../App.css'
class Quotes extends Component {
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
    handleClick = async (e) => {
        e.preventDefault();
        let keyword = this.state.search;
        const key = 'FZ81YTLOWRYZWQ1C';
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${keyword}&apikey=${key}`;
      axios.get(url)
      .then(res => {
        let result = res.data["Global Quote"];
        if(result){
          this.setState({result: result, fetch: true});
        }
      })
      .catch(error => console.log(error))
    }
  render () {
      return (
        <Grid className="Grid">
            <Grid>
                <Typography variant="title" gutterBottom>
                    Stock Search
                </Typography>
                <Search onChange={ this.handleChange } onClick={ this.handleClick }/>
                {this.state.fetch && (
                    <Result result={this.state.result}/>
                )}
            </Grid>
        </Grid>
      );
    }
  }
export default Quotes;
