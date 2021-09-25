const initialState = {
  searchResults: [],
  myTeam: [],
  top: false,
  spinner: false,
  good: 0,
  bad: 0,
};

const herosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@hero/search":
      return {
        ...state,
        searchResults: action.payload,
      };
    case "@hero/add":
      if (action.alignment === "good") {
        return {
          ...state,
          myTeam: state.myTeam.concat(action.payload),
          good: state.good + 1,
        };
      } else {
        return {
          ...state,
          myTeam: state.myTeam.concat(action.payload),
          bad: state.bad + 1,
        };
      }
    case "@hero/remove":
      let newTeam = state.myTeam.filter(
        (hero) => hero.id !== action.idHeroToRemove
      );
      localStorage.setItem("myTeam", JSON.stringify(newTeam));
      if (action.alignment === "good") {
        return {
          ...state,
          myTeam: newTeam,
          good: state.good - 1,
        };
      } else {
        return {
          ...state,
          myTeam: newTeam,
          bad: state.bad - 1,
        };
      }
    case "@ui/top":
      return {
        ...state,
        top: action.payload,
      };
    case "@ui/spinner":
      return {
        ...state,
        spinner: action.payload,
      };
    default:
      return;
  }
};

export default herosReducer;
