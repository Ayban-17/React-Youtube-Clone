import {
  FaBars,
  FaSearch,
  FaVideo,
  FaBell,
  FaMicrophone,
} from "react-icons/fa";
import PropTypes from "prop-types";
import Youtube from "../assets/yt-icon.svg";
import Profile from "../assets/dp.png";
import { Link, useNavigate } from "react-router-dom";

const icons = { width: 20, height: 20, color: "#fff", cursor: "pointer" };

const Header = ({ setSearchWord, searchWord }) => {
  const navigate = useNavigate();

  const handleInput = (e) => {
    setSearchWord(e.target.value);
  };
  const handleOnSubmit = () => {
    setSearchWord("");
    navigate(`/search/${searchWord}`);
  };
  return (
    <header className=" sticky top-0 py-4 z-10 bg-black font-sans flex items-center px-2 gap-1 sm:grid sm:grid-cols-4">
      <Link to="/">
        <div className="flex flex-1 gap-1 px-2  items-center">
          <nav className="mr-3">
            <FaBars style={{ ...icons }} />
          </nav>
          <img className="w-7 h-7 " src={Youtube} alt="logo" />
          <h1 className="text-white text-lg">YouTube</h1>
          <h6 className="text-gray-400 text-xs self-start">PH</h6>
        </div>
      </Link>
      <form
        onSubmit={handleOnSubmit}
        className="hidden sm:flex sm:w-xl flex-1 sm:col-start-2 sm:col-end-4"
      >
        <input
          onChange={handleInput}
          type="text"
          className="focus:outline-none border-2 border-zinc-800 bg-transparent rounded-s-3xl px-4 text-white w-full sm:block "
        />

        <button
          type="submit"
          className="sm:bg-zinc-600 sm:opacity-70 sm:w-20 sm:h-11 sm:flex sm:justify-center sm:items-center sm:rounded-tr-3xl sm:rounded-br-3xl"
        >
          <FaSearch style={{ ...icons }} className="hidden sm:block" />
        </button>

        <button className="sm:bg-zinc-800 hidden sm:flex ml-2 justify-center items-center w-14 rounded-3xl  hover:opacity-70">
          <FaMicrophone style={{ ...icons }} className="" />
        </button>
      </form>
      <div className="flex-1  w-full flex items-center justify-end gap-6 px-2 sm:col-start-4 sm:col-end-5">
        <FaSearch style={{ ...icons }} className="sm:hidden" />
        <FaVideo style={{ ...icons }} />
        <FaBell style={{ ...icons }} className="hidden sm:block" />
        <img
          src={Profile}
          alt="profile"
          className="w-10 h-10 rounded-3xl cursor-pointer"
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  searchWord: PropTypes.string.isRequired,
  setSearchWord: PropTypes.func.isRequired,
};
export default Header;
