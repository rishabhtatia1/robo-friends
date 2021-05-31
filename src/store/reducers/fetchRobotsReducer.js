import {
  FETCH_ROBOTS_FAIL,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
} from "../../constants/constants";

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};
export const fetchRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, isLoading: true };
    case FETCH_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isLoading: false };
    case FETCH_ROBOTS_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
