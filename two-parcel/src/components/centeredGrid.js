import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes, title, spacing, numGrids } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={spacing}>
        <Grid item xs={numGrids}>
          <Paper className={classes.paper}>{title}</Paper>
        </Grid>
        <Grid item xs={numGrids}>
          <Paper className={classes.paper}>{title}</Paper>
        </Grid>
        <Grid item xs={numGrids}>
          <Paper className={classes.paper}>{title}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);