import axios from "axios";

export const addToDex = pokemonID => ({
  type: "ADD_TO_DEX",
  payload: {
    id: pokemonID
  }
});

export const removeFromDex = pokemonID => ({
  type: "REMOVE_FROM_DEX",
  payload: {
    id: pokemonID
  }
});

export const searchPokemons = s => {
  return dispatch => {
    return axios
      .get(`http://localhost:3030/api/cards?limit=-1&name=${s}&type=${s}`)
      .then(res => {
        dispatch({ type: "SEARCH_POKEMON", payload: { data: res.data.cards } });
      })
      .catch(err => {
        throw err;
      });
  };
};
