import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'rgba(29, 161, 242, 0.1)'
  },
}));

export default function Tweet({ tweetContent = "" }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Typography>{tweetContent}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
