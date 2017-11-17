import { combineReducers } from 'redux';

let reducer1 = (state="Hello there!", action) => {
  if(action.type === "DO") {
    return action.text
  } else return state;
}

let rootReducer = combineReducers({
  text: reducer1
})

export default rootReducer;
