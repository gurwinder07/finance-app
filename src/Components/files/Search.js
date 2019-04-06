import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Search = (props) => {
    return  (
        <div style={{ display: 'inline-flex', width: '100%' }}>
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                margin="normal"
                variant="outlined"
                fullWidth
                style={{margin: '10px'}}
                name="search"
                onChange={props.onChange}
            />
            <Button name="search" onClick={props.onClick} style={{width: '30%', margin: '10px', verticalAlign: 'center'}} variant="contained">
                Search Now
            </Button>
        </div>
    );
}

export default Search;
