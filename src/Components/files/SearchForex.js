import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SearchForex = (props) => {
    return  (
        <div style={{ display: 'inline-flex', width: '100%' }}>
            <TextField
                id="standard-search"
                label="Currency From"
                type="search"
                margin="normal"
                variant="outlined"
                fullWidth
                name="term1"
                onChange={props.onChange}
            />
            <TextField
                id="standard-search"
                label="Currency To"
                type="search"
                margin="normal"
                variant="outlined"
                fullWidth
                name="term2"
                onChange={props.onChange}
            />
            <Button name="search" onClick={props.onClick} style={{width: '30%', margin: '10px', verticalAlign: 'center'}} variant="contained">
                Convert Now
            </Button>
        </div>
    );
}

export default SearchForex;
