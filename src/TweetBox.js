import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Sahil Siddiqui",
      username: "Sahils",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/D4D35AQFkVQBUAG1C0w/profile-framedphoto-shrink_100_100/0/1632136995503?e=1634158800&v=beta&t=tdaqf6Ad8D6eobvgZcC64zepbs95EWP2BMo8nE4-l2c",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/D4D35AQFkVQBUAG1C0w/profile-framedphoto-shrink_100_100/0/1632136995503?e=1634158800&v=beta&t=tdaqf6Ad8D6eobvgZcC64zepbs95EWP2BMo8nE4-l2c" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL here if you want to upload the image"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
