import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import PlayVideo from "./pages/PlayVideo";
import Search from "./pages/Search";

function App() {
  const [mainData, setMainData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [searchData, setSearchData] = useState([]);

  const apiKey = import.meta.env.VITE_API;

  const fetchData = async () => {
    const displayUrl = import.meta.env.VITE_VIDEO_URI;
    try {
      const videoResponse = await axios.get(displayUrl);
      const videoData = videoResponse.data.items;

      const channelId = videoData.map((video) => video.snippet.channelId);
      fetchProfileData(channelId, videoData);
    } catch (error) {
      console.log("The error is " + error);
    }
  };

  const fetchProfileData = async (channelId, videoData) => {
    const apiKey = import.meta.env.VITE_API;
    try {
      const profileresponse = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId.join(
          ","
        )}&key=${apiKey}`
      );
      const profile = profileresponse.data.items;

      const data = videoData.map((video) => {
        const channel = profile.find(
          (prof) => prof.id === video.snippet.channelId
        );
        const profileUrl = channel.snippet.thumbnails.default.url;
        return { ...video, profileUrl };
      });
      setMainData(data);
    } catch (error) {
      console.log(`The error is ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App bg-black px-4 ">
      <BrowserRouter>
        <Header setSearchWord={setSearchWord} searchWord={searchWord} />
        <Routes>
          <Route path="/" element={<Home mainData={mainData} />} />
          <Route
            path="/playVideo/:id/:autoplay"
            element={<PlayVideo mainData={mainData} searchData={searchData} />}
          />
          <Route
            path="/search/:query"
            element={
              <Search
                searchData={searchData}
                setSearchData={setSearchData}
                apiKey={apiKey}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
