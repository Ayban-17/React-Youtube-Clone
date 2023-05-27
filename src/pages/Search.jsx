import PropTypes from "prop-types";
import SearchItem from "../components/SearchItem";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Search = ({ searchData, apiKey, setSearchData }) => {
  const { query } = useParams();

  const fetchSearch = async () => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${apiKey}`
      );
      const data = await response.data;
      setSearchData(data.items);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <main
      className=" flex flex-col  gap-5 p-4"
      style={{ border: "solid skyblue 2px" }}
    >
      {searchData &&
        searchData.map((data) => (
          <SearchItem
            key={data.id.videoId || data.id.channelId}
            data={data}
            {...data.snippet}
          />
        ))}
    </main>
  );
};

Search.propTypes = {
  searchData: PropTypes.array.isRequired,
  apiKey: PropTypes.string.isRequired,
  setSearchData: PropTypes.func.isRequired,
};

export default Search;
