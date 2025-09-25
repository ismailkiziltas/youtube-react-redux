const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const fetchVideosByCategory = async (categoryId) => {
  const url = `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network error");
  }
  const data = await response.json();
  return data.items;
};

export const fetchVideoDetails = async (videoId) => {
  const url = `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch video details");
  }
  const data = await response.json();
  return data.items[0];
};

export const fetchChannelDetails = async (channelId) => {
  const url = `${BASE_URL}/channels?part=snippet%2Cstatistics&id=${channelId}&key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch channel details");
  }
  const data = await response.json();
  return data.items[0];
};

export const fetchComments = async (videoId) => {
  const url = `${BASE_URL}/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  const data = await response.json();
  return data.items;
};
