import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const settings = {
  speed: 500,
  infinite: false,
  slidesToScroll: 2,
  variableWidth: true,
};

const Filters = () => {
  const [genre, setGenre] = useState([]);
  const [activeElement, setActiveElement] = useState("All");
  const genreURL = import.meta.env.VITE_GENRE_URI;

  const fetchGenreData = async (url) => {
    const response = await axios.get(url);
    const data = await response.data;
    setGenre(data.items);
  };

  const handleGenreClick = (title) => {
    setActiveElement(title);
  };

  useEffect(() => {
    fetchGenreData(genreURL);
  }, [genreURL]);

  return (
    <nav className="sticky bg-black  " style={{ top: "75px" }}>
      <Slider {...settings} className="p-2 mx-2">
        <div onClick={() => handleGenreClick("All")}>
          <div
            className={`mr-2 p-2 rounded-md cursor-pointer hover:bg-zinc-700 ${
              activeElement === "All" ? "bg-white" : "bg-zinc-800 "
            }`}
          >
            <h3
              className={`text-md ${
                activeElement === "All" ? "text-black" : "text-white"
              }`}
            >
              All
            </h3>
          </div>
        </div>
        {genre.map((data) => {
          const { id, snippet } = data;
          return (
            <div
              key={id}
              className="container"
              onClick={() => handleGenreClick(snippet.title)}
            >
              <div
                className={`mr-2 p-2 rounded-md cursor-pointer hover:bg-zinc-700 ${
                  activeElement === snippet.title ? "bg-white" : " bg-zinc-800"
                }`}
              >
                <h3
                  className={`text-center ${
                    activeElement === snippet.title
                      ? "text-black"
                      : "text-white "
                  }`}
                >
                  {snippet.title}
                </h3>
              </div>
            </div>
          );
        })}
      </Slider>
    </nav>
  );
};

export default Filters;
