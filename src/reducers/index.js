import { combineReducers } from "redux";
import tasksSagaReducer from "./tasksSagaReducer";

const rootReducer = combineReducers({
  task: tasksSagaReducer,
});

export default rootReducer;
