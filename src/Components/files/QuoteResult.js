import React from 'react';
import Paper from '@material-ui/core/Paper';
import '../../App.css'

const Result = (props) => {
  const stock = props.result;
      return (
        <Paper>
            <li className="StockListItem">
                <div className="StockListItem_Symbol"><span>Stock: </span>{ stock["01. symbol"] }</div>
                <div className="StockListItem_Price"><span>Price: </span>{ stock["05. price"] }</div>
                <div className="StockListItem_Volume"><span>Open: </span>{ stock["02. open"] }</div>
                <div className="StockListItem_Time"><span>High: </span>{ stock["03. high"] }</div>
                <div className="StockListItem_Volume"><span>Low: </span>{ stock["04. low"] }</div>
                <div className="StockListItem_Time"><span>Latest Trending Day: </span>{ stock["07. latest trading day"] }</div>
                <div className="StockListItem_Volume"><span>Volume: </span>{ stock["06. volume"] }</div>
                <div className="StockListItem_Time"><span>Previous Close: </span>{ stock["08. previous close"] }</div>
                <div className="StockListItem_Volume"><span>Change: </span>{ stock["09. change"] }</div>
                <div className="StockListItem_Time"><span>Change Percent: </span>{ stock["10. change percent"] }</div>
            </li>
        </Paper>
      )
}
export default Result;
