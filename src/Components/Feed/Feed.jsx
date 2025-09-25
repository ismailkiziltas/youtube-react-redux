import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchVideosByCategory } from "../../services/youtube";
import { value_convertor } from "../../utils/format";
import moment from "moment";
import "./Feed.scss";
import { useSelector } from "react-redux";

const Feed = () => {
  const { categoryId } = useSelector((state) => state.ui);
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const videoData = await fetchVideosByCategory(categoryId);
      setData(videoData);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, [categoryId]);

  return (
    <div className="feed">
      {data.map((item) => (
        <Link
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
          key={item.id}
        >
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_convertor(item.statistics?.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
