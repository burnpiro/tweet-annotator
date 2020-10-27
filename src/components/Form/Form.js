import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FirebaseDatabaseMutation,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useCookies } from "react-cookie";
import { nanoid } from "nanoid";
import Tweet from "../Tweet/Tweet";
import angIcon from "./anger.svg";
import disIcon from "./disgusted.svg";
import fearIcon from "./fear.svg";
import guiltIcon from "./guilt.svg";
import hapIcon from "./happiness.svg";
import sadIcon from "./sad.svg";
import shamIcon from "./shame.svg";
import neutIcon from "./neutral.svg";
import { cookieKey, skippedKey } from "../../config";

const labels = [
  {
    id: "joy",
    label: "Joy",
    icon: hapIcon,
  },
  {
    id: "fear",
    label: "Fear",
    icon: fearIcon,
  },
  {
    id: "anger",
    label: "Anger",
    icon: angIcon,
  },
  {
    id: "neutral",
    label: "Neutral",
    icon: neutIcon,
  },
  {
    id: "sadness",
    label: "Sadness",
    icon: sadIcon,
  },
  {
    id: "disgust",
    label: "Disgust",
    icon: disIcon,
  },
  {
    id: "shame",
    label: "Shame",
    icon: shamIcon,
  },
  {
    id: "guilt",
    label: "Guilt",
    icon: guiltIcon,
  },
];

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    margin: "auto",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    fontSize: "1rem",
  },
  labelIcon: {
    height: theme.spacing(6),
    marginRight: theme.spacing(2),
  },
}));

const path = "tweets/";
const cookieAge = 60 * 60 * 24 * 365; //year
const idKey = "userId";

export default function Form() {
  const classes = useStyles();
  const [settingSkip, setSettingSkip] = useState(null);
  const [cookies, setCookies] = useCookies([cookieKey, idKey, skippedKey]);

  const annotations = cookies[cookieKey] || [];
  const skipped = cookies[skippedKey] || [];

  if (cookies[idKey] == null) {
    setCookies(idKey, nanoid(), { maxAge: cookieAge });
  }

  useEffect(() => {
    if (settingSkip != null) {
      setCookies(skippedKey, [...skipped, settingSkip], { maxAge: cookieAge });
      setSettingSkip(null);
    }
  }, [settingSkip]);

  const handleSkip = (tweet) => {
    setSettingSkip(tweet.id);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {settingSkip == null && (
          <FirebaseDatabaseNode path={path} orderByKey annotations skipped>
            {(d) => {
              if (!d.value) {
                return null;
              }
              let selectedTweets = d.value.filter(
                (tweet) =>
                  !annotations.includes(tweet.id) && !skipped.includes(tweet.id)
              );
              const selectedTweetId =
                selectedTweets[
                  Math.floor(Math.random() * selectedTweets.length)
                ].id;
              const tweetIndex = d.value.findIndex(
                (tweet) => tweet.id === selectedTweetId
              );
              return (
                cookies[idKey] &&
                d.value != null &&
                [d.value[tweetIndex]].map((tweet) => (
                  <React.Fragment key={tweet.id}>
                    <Grid item xs={12}>
                      <Tweet tweetContent={tweet.tweet} />
                    </Grid>
                    {tweet && (
                      <FirebaseDatabaseMutation
                        type="update"
                        path={path + `${tweetIndex}/`}
                      >
                        {({ runMutation }) => {
                          return (
                            <Grid
                              container
                              alignContent="center"
                              justify="center"
                              alignItems="center"
                              className={classes.buttonContainer}
                            >
                              {labels.map((label) => (
                                <Button
                                  key={label.id}
                                  // variant="contained"
                                  variant="outlined"
                                  color="secondary"
                                  className={classes.button}
                                  onClick={async () => {
                                    setCookies(
                                      cookieKey,
                                      [...annotations, tweet.id],
                                      { maxAge: cookieAge }
                                    );
                                    const { key } = await runMutation({
                                      ...tweet,
                                      annotations: [
                                        ...(tweet
                                          ? tweet.annotations || []
                                          : []),
                                        label.id,
                                      ],
                                      annotatedBy: [
                                        ...(tweet
                                          ? tweet.annotatedBy || []
                                          : []),
                                        cookies[idKey],
                                      ],
                                    });
                                  }}
                                >
                                  <img
                                    className={classes.labelIcon}
                                    src={label.icon}
                                  />
                                  {label.label}
                                </Button>
                              ))}
                            </Grid>
                          );
                        }}
                      </FirebaseDatabaseMutation>
                    )}
                    <div className={classes.buttons}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleSkip(tweet)}
                        className={classes.button}
                      >
                        {"Skip :("}
                      </Button>
                    </div>
                  </React.Fragment>
                ))
              );
            }}
          </FirebaseDatabaseNode>
        )}
      </Grid>
    </React.Fragment>
  );
}
