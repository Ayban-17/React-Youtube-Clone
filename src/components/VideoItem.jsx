import PropTypes from "prop-types";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";

const VideoItem = ({ video, title, thumbnails, channelTitle, publishedAt }) => {
  return (
    <Link to={`/playVideo/${video.id}/1`} className="card cursor-pointer w-96">
      <div>
        <div className="thumbnail">
          <img
            className="rounded-xl w-full "
            src={thumbnails.medium.url}
            alt="thumbnail"
          />
        </div>
        <div className="details flex px-4 py-2">
          <img
            src={video.profileUrl}
            alt="profile"
            className="w-10 h-10 rounded-3xl mt-2"
          />
          <div className="text px-2">
            <h1 className="text-white text-lg font-semibold line-clamp-2">
              {title}
            </h1>
            <h2 className="text-gray-400">{channelTitle}</h2>
            <div className="statistics text-gray-400 gap-1 flex items-center">
              <p>
                {video.statistics.viewCount > 1000000
                  ? (video.statistics.viewCount / 1000000).toFixed(1) + "m"
                  : video.statistics.viewCount > 1000
                  ? (video.statistics.viewCount / 1000).toFixed(1) + "k"
                  : video.statistics.viewCount}
              </p>
              <div className="w-1 h-1 rounded-3xl bg-gray-400"></div>
              <p>
                <TimeAgo publishedAt={publishedAt} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnails: PropTypes.object.isRequired,
  channelTitle: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  video: PropTypes.object.isRequired,
};

export default VideoItem;
