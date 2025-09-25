import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchVideosByCategory } from "../../services/youtube";
import { value_convertor } from "../../utils/format";
import "./Recommended.scss";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const loadRecommendedVideos = async () => {
    if (!categoryId) return;
    try {
      const recommendedData = await fetchVideosByCategory(categoryId);
      setApiData(recommendedData);
    } catch (error) {
      console.error("Failed to fetch recommended videos:", error);
    }
  };

  useEffect(() => {
    loadRecommendedVideos();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.map((item, index) => (
        <Link
          to={`/video/${item.snippet.categoryId}/${item.id}`}
          key={index}
          className="side-video-list"
        >
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_convertor(item.statistics?.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
