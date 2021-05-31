import { combineReducers } from "redux";
import { fetchRobots } from "./fetchRobotsReducer";
import { searchRobots } from "./searchRobotsReducer";

export default combineReducers({ fetchRobots, searchRobots });
