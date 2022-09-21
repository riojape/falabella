export const initialStore = {
  auth: {},
};

export const types = {
  login: "login",
};

export const FalabellaReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return state;
    default:
      return state;
  }
};
