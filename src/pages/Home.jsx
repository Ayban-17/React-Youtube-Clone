import Filters from "../components/Filters";
import Main from "../components/Main";
import PropTypes from "prop-types";

const Home = ({ mainData }) => {
  return (
    <div>
      <Filters />
      <Main mainData={mainData} />
    </div>
  );
};

Home.propTypes = {
  mainData: PropTypes.array.isRequired,
};
export default Home;
