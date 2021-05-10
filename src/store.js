import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),
//de esta forma funciona tenga o no instalado redux devtools
    typeof window === "object" && 
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ? 
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;