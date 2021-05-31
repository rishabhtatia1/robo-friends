import React, { useEffect } from "react";
import CardList from "../components/CardList";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { connect } from "react-redux";
import { setSearchField } from "../store/actions/searchAction";
import { fetchRobots } from "../store/actions/fetchRobotsAction";

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.fetchRobots.robots,
  isLoading: state.fetchRobots.isLoading,
  error: state.fetchRobots.error,
});
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onFetchRobots: () => dispatch(fetchRobots()),
  };
};
const App = (props) => {
  const {
    searchField,
    onSearchChange,
    onFetchRobots,
    robots,
    isLoading,
    error,
  } = props;
  useEffect(() => {
    onFetchRobots();
  }, [onFetchRobots]);
  const updatedRobots = robots.filter((item) =>
    item.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="tc">
      <h1 className="f1">ROBO FRIENDS</h1>
      <SearchBox
        inputSearch={searchField}
        searchOnChangeHandler={onSearchChange}
      />
      {isLoading ? (
        <h1>LOADING</h1>
      ) : !updatedRobots?.length || error ? (
        <h1>NO ROBOTS FOUND</h1>
      ) : (
        <Scroll>
          <CardList robots={updatedRobots} />
        </Scroll>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
