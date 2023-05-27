import PropTypes from "prop-types";

import VideoItem from "./VideoItem";

const Main = ({ mainData }) => {
  return (
    <main className=" flex flex-wrap justify-center gap-5 p-4">
      {mainData.map((video) => {
        return <VideoItem key={video.id} video={video} {...video.snippet} />;
      })}
    </main>
  );
};

Main.propTypes = {
  mainData: PropTypes.array.isRequired,
};
export default Main;
