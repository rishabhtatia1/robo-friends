import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import "./App.css";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import Scroll from "../components/Scroll";

const App = () => {
  const [isLoading, setisLoading] = useState(false);
  const [robotsList, setRobotsList] = useState([]);
  const [inputSearch, setinputSearch] = useState("");
  const searchOnChangeHandler = (e) => {
    const { value } = e.target;
    setinputSearch(value);
  };
  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setRobotsList(response?.data);
    } catch {
      setRobotsList([]);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const updatedRobots = robotsList.filter((item) =>
    item.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  return (
    <div className="tc">
      <h1 className="f1">ROBO FRIENDS</h1>
      <SearchBox
        inputSearch={inputSearch}
        searchOnChangeHandler={searchOnChangeHandler}
      />
      {isLoading ? (
        <h1>LOADING</h1>
      ) : !updatedRobots?.length ? (
        <h1>NO ROBOTS FOUND</h1>
      ) : (
        <Scroll>
          <CardList robots={updatedRobots} />
        </Scroll>
      )}
    </div>
  );
};

export default App;
