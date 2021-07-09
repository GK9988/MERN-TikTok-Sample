import React from "react";
import "./videoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";

const VideoSidebar = ({ likes, shares, comments }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar-button like-btn">
        {liked ? (
          <FavoriteIcon
            fontSize="large"
            onClick={(e) => {
              setLiked(false);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => {
              setLiked(true);
            }}
          />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar-button">
        <MessageIcon fontSize="large" />
        <p>{comments}</p>
      </div>
      <div className="videoSidebar-button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
