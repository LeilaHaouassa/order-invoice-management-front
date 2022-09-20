import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyle } from './Styles';

export default function FormLayout(props) {
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      
    </ThemeProvider>
  );
}
