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
import useLocalStorage from "react-localstorage-hook";
import {labels, annotationKey, skippedKey, userKey} from "../../helpers/settings";


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

export default function Form() {
  const classes = useStyles();
  const [settingSkip, setSettingSkip] = useState(null);
  const [selectedTweet, setSelectedTweet] = useState(null)
  const [cookies, setCookies] = useCookies([ userKey ]);
  const [annotations, setAnnotations] = useLocalStorage(annotationKey)
  const [skipped, setSkipped] = useLocalStorage(skippedKey)

  if (cookies[userKey] == null) {
    setCookies(userKey, nanoid(), { maxAge: cookieAge });
  }

  useEffect(() => {
    if (settingSkip != null) {
      setSkipped([...skipped, settingSkip]);
      setSettingSkip(null);
      setSelectedTweet(null);
    }
  }, [settingSkip]);

  const handleSkip = (tweet) => {
    setSettingSkip(tweet.id);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {settingSkip == null && (
          <React.Fragment>
            <Grid item xs={12}>
              {
                selectedTweet && <Tweet tweetContent={selectedTweet.tweet} tweetId={"" + selectedTweet.id + ""} />
              }
            </Grid>

            <React.Fragment>
              {selectedTweet && (
                <FirebaseDatabaseMutation
                  type="update"
                  path={path + `${selectedTweet.pos}/`}
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
                              setAnnotations(
                                [...annotations, selectedTweet.id]
                              );
                              const request = {
                                id: selectedTweet.id,
                                tweet: selectedTweet.tweet,
                                annotations: [
                                  ...(selectedTweet
                                    ? selectedTweet.annotations || []
                                    : []),
                                  label.id,
                                ],
                                annotatedBy: [
                                  ...(selectedTweet
                                    ? selectedTweet.annotatedBy || []
                                    : []),
                                  cookies[userKey],
                                ],
                              }
                              setSelectedTweet(null)
                              const { key } = await runMutation(request);
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
                  onClick={() => handleSkip(selectedTweet)}
                  className={classes.button}
                >
                  {"Skip :("}
                </Button>
              </div>
            </React.Fragment>
            <FirebaseDatabaseNode path={path} orderByKey annotations skipped>
              {(d) => {
                if (!d.value) {
                  return null;
                }
                let selectedTweets = d.value.filter(
                  (tweet) =>
                    !annotations.includes(tweet.id) &&
                    !skipped.includes(tweet.id)
                );
                selectedTweets = selectedTweets.filter(
                  (tweet) =>
                    tweet.annotations == null || tweet.annotations.length < 3
                );
                const selectedTweetId =
                  selectedTweets[
                    Math.floor(Math.random() * selectedTweets.length)
                  ].id;
                const tweetIndex = d.value.findIndex(
                  (tweet) => tweet.id === selectedTweetId
                );
                if (cookies[userKey] && d.value != null && selectedTweet == null) {
                  setSelectedTweet({ ...d.value[tweetIndex], pos: tweetIndex })
                }
                return (<div />);
              }}
            </FirebaseDatabaseNode>
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
}
