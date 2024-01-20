import React from 'react';
import styles from './TechStackContainer.css';
import TechStack from '../../tech-stack/TechStack';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const defaultTheme = createMuiTheme();
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: '3.4vw',
      [breakpoints.up('lg')]: {
        fontSize: '1.4vw'
      },
    }
  },
});

export default function TechStackContainer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h2 className={styles.title}>TECH STACK</h2>
        <ThemeProvider theme={theme}>
          <TechStack />
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
}
