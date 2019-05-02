import PokemonReducer from "./pokemon-reducer";
import UIReducer from "./ui-reducer";

import { combineReducers } from "redux";

const RootReducer = combineReducers({
  Pokemon: PokemonReducer,
  UI: UIReducer
});

export default RootReducer;
