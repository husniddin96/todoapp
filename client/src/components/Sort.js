import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Sort(props) {
    const classes = useStyles();

    return (
        <div style={{ height: '', margin:'2px%' }}>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                endIcon={props.sort ? <ExpandMore /> : <ExpandLess />}
                onClick={props.changeSort.bind(this)}
            >
                Sort by created date
      </Button>

        </div>
    );
}

