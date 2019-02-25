import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const middleware = [thunk];

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
