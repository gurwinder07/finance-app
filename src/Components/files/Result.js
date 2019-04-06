import React from 'react';
import Paper from '@material-ui/core/Paper';
import '../../App.css'

const Result = (props) => {
  const stock = props.result;
      return (
        <Paper>
            <li className="StockListItem">
                <div className="StockListItem_Symbol"><span>From Currency Code: </span>{stock["1. From_Currency Code"]}</div>
                <div className="StockListItem_Price"><span>From Currency Name: </span>{stock["2. From_Currency Name"]}</div>
                <div className="StockListItem_Volume"><span>To Currency Code: </span>{ stock["3. To_Currency Code"] }</div>
                <div className="StockListItem_Time"><span>To Currency Name: </span>{ stock["4. To_Currency Name"] } </div>
                <div className="StockListItem_Volume"><span>Exchange Rate: </span>{ stock["5. Exchange Rate"] }</div>
                <div className="StockListItem_Time"><span>Last Refreshed: </span>{ stock["6. Last Refreshed"] } </div>
                <div className="StockListItem_Volume"><span>Time Zone: </span>{ stock["7. Time Zone"] } </div>
            </li>
        </Paper>
      )
}
export default Result;
