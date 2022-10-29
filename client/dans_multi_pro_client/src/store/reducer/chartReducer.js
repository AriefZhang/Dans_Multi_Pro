const userState = {
  job: [],
  jobById: {}
};

const reducer = (state = userState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "job/fetchSuccess":
      return {
        ...state,
        job: payload,
      };

    default:
      return state;
  }
};

export default reducer;
