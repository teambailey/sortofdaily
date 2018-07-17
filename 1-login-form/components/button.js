import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container_flex: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const formTypeCheck = (classes, formType) => {
  switch (formType) {
    case 'flex':
      return classes.container_flex
      break
    default:
      return ''
  }
}

class formButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, formType } = this.props;
    return (
      <div className={formTypeCheck(classes, formType)}>
        <Button variant="outlined" size="small" color="primary" className={ classes.button }>
          Log In
        </Button>
      </div>
    );
  }
}

formButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

formButton.defaultProps = {};

module.exports = withStyles(styles)(formButton);