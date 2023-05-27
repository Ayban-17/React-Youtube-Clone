import Proptypes from "prop-types";
const TimeAgo = ({ publishedAt }) => {
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate - publishedDate) / 1000; // Get the time difference in seconds

  let interval = Math.floor(timeDiff / 31536000); // Number of years

  if (interval >= 1) {
    return (
      <span>
        {interval === 1 ? interval + " year ago" : interval + " years ago"}
      </span>
    );
  }

  interval = Math.floor(timeDiff / 2592000); // Number of months

  if (interval >= 1) {
    return (
      <span>
        {interval === 1 ? interval + " month ago" : interval + " months ago"}
      </span>
    );
  }

  interval = Math.floor(timeDiff / 604800); // Number of weeks

  if (interval >= 1) {
    return (
      <span>
        {interval === 1 ? interval + " week ago" : interval + " weeks ago"}
      </span>
    );
  }

  interval = Math.floor(timeDiff / 86400); // Number of days

  if (interval >= 1) {
    return (
      <span>
        {interval === 1 ? interval + " day ago" : interval + " days ago"}
      </span>
    );
  }

  interval = Math.floor(timeDiff / 3600); // Number of hours

  if (interval >= 1) {
    return (
      <span>
        {interval === 1 ? interval + " hour ago" : interval + " hours ago"}
      </span>
    );
  }

  interval = Math.floor(timeDiff / 60); // Number of minutes

  if (interval >= 1) {
    return (
      <span>
        {interval === 1 ? interval + " minute ago" : interval + " minutes ago"}
      </span>
    );
  }

  return <span>Just now</span>; // If the time difference is less than a minute
};

TimeAgo.propTypes = {
  publishedAt: Proptypes.string.isRequired,
};
export default TimeAgo;
