import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useCookies } from "react-cookie";
import {cookieKey, userKey} from "../../config";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with React and Material UI for "}
      <Link color="inherit" href="https://pwr.edu.pl/en/">
        <b>WUST</b>
      </Link>{" "}
      {"."}<br/><span style={{fontSize: 10}}>
      {"Icons made by "}
      <Link href="https://www.flaticon.com/authors/freepik" color="inherit" title="Freepik">Freepik</Link>
      {" from "}
      <Link href="https://www.flaticon.com/" color="inherit" title="Flaticon">www.flaticon.com</Link></span>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const [cookies] = useCookies([cookieKey, userKey]);

  const annotations = cookies[cookieKey] || []

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Tweet annotator v1.0
          </Typography>
          <span style={{'flex': 1}} />
          {
            annotations.length > 500 && <Typography variant="h6" color="inherit" noWrap>
              Your ID is: <b style={{color: 'blue'}}>{cookies[userKey]} tweets</b>
            </Typography>
          }
          <span style={{'flex': 1}} />
          <Typography variant="h6" color="inherit" noWrap>
            You've annotated: <b style={{color: 'blue'}}>{annotations.length} tweets</b>
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>{children}</React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
