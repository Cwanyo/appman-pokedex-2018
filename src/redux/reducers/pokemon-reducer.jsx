const initState = {
  Dex: [],
  Unselect: []
};

const PokemonReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_DEX": {
      let selectedPos = state.Unselect.findIndex(
        x => x.id === action.payload.id
      );

      let newDex = [...state.Dex, state.Unselect[selectedPos]];

      let onDex = newDex.map(p => p.id);
      let newUn = state.Unselect.filter(p => !onDex.includes(p.id));

      return {
        ...state,
        Dex: newDex,
        Unselect: newUn
      };
    }
    case "REMOVE_FROM_DEX": {
      let newDex = state.Dex.filter(p => {
        return p.id !== action.payload.id;
      });

      return { ...state, Dex: newDex };
    }
    case "SEARCH_POKEMON": {
      let onDex = state.Dex.map(p => p.id);
      let newUn = action.payload.data.filter(p => !onDex.includes(p.id));

      return { ...state, Unselect: newUn };
    }
    default:
      return state;
  }
};

export default PokemonReducer;
