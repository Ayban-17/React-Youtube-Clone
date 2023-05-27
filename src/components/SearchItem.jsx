import PropTypes from "prop-types";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";

const SearchItem = ({
  data,
  title,
  thumbnails,
  channelTitle,
  publishedAt,
  description,
}) => {
  return (
    <Link to={`/playVideo/${data.id.videoId}/1`}>
      <div className="card text-white flex gap-5">
        <img
          className="rounded-2xl"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className="card-body ">
          <h1 className="card-title text-2xl">{title}</h1>
          <div className="statistics flex items-center gap-2 text-xs font-semibold">
            <p className="card-text text-zinc-400">4.1m views</p>
            <div className="w-1 h-1 rounded-3xl bg-gray-400"></div>
            <p className="card-text text-zinc-400">
              <TimeAgo publishedAt={publishedAt} />
            </p>
          </div>
          <div className="channel flex gap-3 items-center py-4">
            <img
              src={thumbnails.medium.url}
              alt="profile"
              className="w-7 h-7 rounded-full"
            />
            <p className="text-zinc-400">{channelTitle}</p>
          </div>
          <p className="text-zinc-400 line-clamp-1"> {description}</p>
        </div>
      </div>
    </Link>
  );
};

SearchItem.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  thumbnails: PropTypes.object.isRequired,
  channelTitle: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SearchItem;
