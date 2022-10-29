const userState = {
  user: {},
  registerUser: {},
  isLogin: false
};

const reducer = (state = userState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "user/fetchSuccess":
      return {
        ...state,
        user: payload,
      };
    case "user/registerSuccess":
      return {
        ...state,
        registerUser: payload,
      };
    case "user/loginSuccess":
      return {
        ...state,
        isLogin: payload,
      };

    default:
      return state;
  }
};

export default reducer;
