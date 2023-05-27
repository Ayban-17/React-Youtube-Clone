import PropTypes from "prop-types";
import { useState } from "react";
import {
  FaBell,
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaHandScissors,
  FaEllipsisH,
  FaBars,
  FaArrowDown,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import Filters from "../components/Filters";
import Main from "../components/Main";

const PlayVideo = ({ mainData, searchData }) => {
  const { id, autoplay } = useParams();
  const details = mainData.find((data) => data.id === id);
  const searchDetails = searchData.find((data) => data.id.videoId === id);
  const [descIsOpen, setDescIsOpen] = useState("line-clamp-2");

  const handleShowMoreClick = () => {
    descIsOpen === "line-clamp-2"
      ? setDescIsOpen("")
      : setDescIsOpen("line-clamp-2");
  };
  return (
    <>
      {details ? (
        <main
          style={{ minWidth: 300 }}
          className="sm:block lg:grid lg:grid-cols-md lg:p-10"
        >
          <section className="px-10">
            <iframe
              className="w-full h-96 lg:h-100 max-w-7xl"
              src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay}&controls=1&modestbranding=1&showinfo=1&rel=0`}
            ></iframe>
            <div className="details text-white p-2 flex flex-col gap-3">
              <h2 className="line-clamp-2 text-xl">
                {details.snippet.title || searchDetails.snippet.title}
              </h2>

              <div className="channel flex flex-wrap justify-between ">
                <div className="flex gap-3 items-center w-fit flex-wrap">
                  <img
                    src={details.profileUrl || ""}
                    alt="pictrue"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="channel-info mr-5">
                    <p className="text-lg font-semibold">
                      {details.snippet.channelTitle ||
                        searchDetails.snippet.channelTitle}
                    </p>
                    <p className="text-xs text-zinc-300">2.7m subscriber</p>
                  </div>
                  <button className="flex items-center gap-1 bg-white h-10 py-3 rounded-3xl cursor-pointer hover:opacity-70">
                    <FaBell />
                    <p className="text-black font-semibold ">Subscribe</p>
                    <FaArrowDown />
                  </button>
                </div>
                <div className="actions flex items-center gap-3 w-fit flex-wrap ">
                  <div className="reactions flex">
                    <button
                      className="bg-zinc-800 w-20 h-8 py-5 flex justify-evenly items-center gap-2 rounded-s-full cursor-pointer hover:bg-zinc-700"
                      style={{ width: 100 }}
                    >
                      <FaThumbsUp />
                      {details.statistics.likeCount > 1000000
                        ? (details.statistics.likeCount / 1000000).toFixed(1) +
                          "m"
                        : details.statistics.likeCount > 1000
                        ? (details.statistics.likeCount / 1000).toFixed(1) + "k"
                        : details.statistics.likeCount || "1.6m"}
                    </button>
                    <div
                      style={{ height: 27, border: "1px solid gray" }}
                      className="self-center"
                    ></div>
                    <button className="bg-zinc-800 w-12 h-8  py-5 flex justify-center items-center rounded-e-full cursor-pointer hover:bg-zinc-700">
                      <FaThumbsDown />
                    </button>
                  </div>
                  <button className="bg-zinc-800  w-20 h-8 py-5 rounded-full cursor-pointer hover:bg-zinc-700 justify-evenly flex items-center">
                    <FaShare />
                    Share
                  </button>
                  <button className="bg-zinc-800 flex justify-evenly items-center w-fit h-8 px-3 py-5 rounded-full cursor-pointer hover:bg-zinc-700  gap-3 sm:hidden">
                    <FaHandScissors />
                    Clip
                  </button>
                  <button className="bg-zinc-800  w-20 h-8 py-5 rounded-full cursor-pointer hover:bg-zinc-700 justify-evenly flex items-center">
                    <FaBars />
                    Save
                  </button>
                  <button className="bg-zinc-800 w-10 h-10 rounded-full cursor-pointer hover:bg-zinc-700 flex items-center justify-center">
                    <FaEllipsisH />
                  </button>
                </div>
              </div>
              <div className="description  p-3 bg-zinc-800 rounded-2xl">
                <p className={`text-white ${descIsOpen}  `}>
                  {details.snippet.description ||
                    searchDetails.snippet.description}
                </p>
                <button
                  className="font-bold cursor-pointer mt-2"
                  onClick={handleShowMoreClick}
                >
                  {descIsOpen === "line-clamp-2" ? "Show More" : "Show Less"}
                </button>
              </div>
            </div>
          </section>
          <section>
            <Filters className="static" />
            <Main mainData={mainData} />
          </section>
        </main>
      ) : (
        searchDetails && (
          <main
            style={{ minWidth: 300 }}
            className="sm:block lg:grid lg:grid-cols-md lg:p-10"
          >
            <section className="px-10">
              <iframe
                className="w-full h-96 lg:h-100 max-w-7xl"
                src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay}&controls=1&modestbranding=1&showinfo=1&rel=0`}
              ></iframe>
              <div className="details text-white p-2 flex flex-col gap-3">
                <h2 className="line-clamp-2 text-xl">
                  {searchDetails.snippet.title}
                </h2>

                <div className="channel flex flex-wrap justify-between ">
                  <div className="flex gap-3 items-center w-fit flex-wrap">
                    <img
                      // src={details.profileUrl ? details.profileUrl : ""}
                      alt="pictrue"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="channel-info mr-5">
                      <p className="text-lg font-semibold">
                        {searchDetails.snippet.channelTitle}
                      </p>
                      <p className="text-xs text-zinc-300">2.7m subscriber</p>
                    </div>
                    <button className="flex items-center gap-1 bg-white h-10 py-3 rounded-3xl cursor-pointer hover:opacity-70">
                      <FaBell />
                      <p className="text-black font-semibold ">Subscribe</p>
                      <FaArrowDown />
                    </button>
                  </div>
                  <div className="actions flex items-center gap-3 w-fit flex-wrap ">
                    <div className="reactions flex">
                      <button className="bg-zinc-800 w-20 h-8 py-5 flex justify-evenly items-center gap-2 rounded-s-full cursor-pointer hover:bg-zinc-700">
                        <FaThumbsUp />
                        {/* {details.statistics.likeCount > 1000000
                          ? (details.statistics.likeCount / 1000000).toFixed(
                              1
                            ) + "m"
                          : details.statistics.likeCount > 1000
                          ? (details.statistics.likeCount / 1000).toFixed(1) +
                            "k"
                          : details.statistics.likeCount || "1.6m"} */}
                      </button>
                      <div
                        style={{ height: 27, border: "1px solid gray" }}
                        className="self-center"
                      ></div>
                      <button className="bg-zinc-800 w-12 h-8  py-5 flex justify-center items-center rounded-e-full cursor-pointer hover:bg-zinc-700">
                        <FaThumbsDown />
                      </button>
                    </div>
                    <button className="bg-zinc-800  w-20 h-8 py-5 rounded-full cursor-pointer hover:bg-zinc-700 justify-evenly flex items-center">
                      <FaShare />
                      Share
                    </button>
                    <button className="bg-zinc-800 flex justify-evenly items-center w-fit h-8 px-3 py-5 rounded-full cursor-pointer hover:bg-zinc-700  gap-3 sm:hidden">
                      <FaHandScissors />
                      Clip
                    </button>
                    <button className="bg-zinc-800  w-20 h-8 py-5 rounded-full cursor-pointer hover:bg-zinc-700 justify-evenly flex items-center">
                      <FaBars />
                      Save
                    </button>
                    <button className="bg-zinc-800 w-10 h-10 rounded-full cursor-pointer hover:bg-zinc-700 flex items-center justify-center">
                      <FaEllipsisH />
                    </button>
                  </div>
                </div>
                <div className="description  p-3 bg-zinc-800 rounded-2xl">
                  <p className={`text-white ${descIsOpen}  `}>
                    {searchDetails.snippet.description}
                  </p>
                  <button
                    className="font-bold cursor-pointer mt-2"
                    onClick={handleShowMoreClick}
                  >
                    {descIsOpen === "line-clamp-2" ? "Show More" : "Show Less"}
                  </button>
                </div>
              </div>
            </section>
            <section>
              <Filters className="static" />
              {/* <Main mainData={mainData} /> */}
            </section>
          </main>
        )
      )}
    </>
  );
};

PlayVideo.propTypes = {
  mainData: PropTypes.array.isRequired,
  searchData: PropTypes.array.isRequired,
};

export default PlayVideo;
