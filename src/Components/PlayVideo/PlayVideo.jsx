import { useEffect, useState } from "react";
import "./PlayVideo.scss";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import moment from "moment";
import { useParams } from "react-router-dom";
import { value_convertor } from "../../utils/format";
import {
  fetchVideoDetails,
  fetchChannelDetails,
  fetchComments,
} from "../../services/youtube";

const PlayVideo = () => {
  const { videoId } = useParams();

  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const videoDetails = await fetchVideoDetails(videoId);
        setVideoData(videoDetails);

        if (videoDetails) {
          const channelDetails = await fetchChannelDetails(
            videoDetails.snippet.channelId
          );
          setChannelData(channelDetails);

          const comments = await fetchComments(videoId);
          setCommentData(comments);
        }
      } catch (error) {
        console.error("Failed to load video page data:", error);
      }
    };

    loadAllData();
  }, [videoId]);

  if (!videoData || !channelData) {
    return (
      <div className="play-video">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3>{videoData.snippet.title}</h3>
      <div className="play-video-info">
        <p>
          {value_convertor(videoData.statistics.viewCount)} Views &bull;{" "}
          {moment(videoData.snippet.publishedAt).fromNow()}
        </p>
        <div>
          <span>
            <img src={like} alt="" />{" "}
            {value_convertor(videoData.statistics.likeCount)}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData.snippet.thumbnails.default.url} alt="" />
        <div>
          <p>{videoData.snippet.channelTitle}</p>
          <span>
            {value_convertor(channelData.statistics.subscriberCount)}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{videoData.snippet.description.slice(0, 250)}</p>
        <hr />
        <h4>{value_convertor(videoData.statistics.commentCount)} Comments</h4>
        {commentData.map((item, index) => {
          const commentSnippet = item.snippet.topLevelComment.snippet;
          return (
            <div key={index} className="comment">
              <img src={commentSnippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>
                  {commentSnippet.authorDisplayName}{" "}
                  <span>{moment(commentSnippet.publishedAt).fromNow()}</span>
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: commentSnippet.textDisplay,
                  }}
                ></p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{value_convertor(commentSnippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
