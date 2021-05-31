import axios from "axios";
import {
  FETCH_ROBOTS_FAIL,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
} from "../../constants/constants";

export const fetchRobots = () => async (dispatch) => {
  dispatch({ type: FETCH_ROBOTS_PENDING });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: response?.data });
  } catch (error) {
    dispatch({ type: FETCH_ROBOTS_FAIL, payload: error });
  }
};
