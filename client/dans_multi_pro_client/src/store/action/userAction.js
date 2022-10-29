const URL_BASE = "http://localhost:4000/"

export function setUser(payload) {
  return {
    type: "user/fetchSuccess",
    payload,
  };
}

export function setUserLogin(payload) {
  return {
    type: "user/loginSuccess",
    payload,
  };
}

export function setUserRegister(payload) {
  return {
    type: "user/registerSuccess",
    payload,
  };
}

export function registerUserAsync(payload) {
  return (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(payload)
    };

    fetch(URL_BASE + "register", requestOptions)
      .then((resp) => {
        if (!resp.ok) return resp.text().then(text => { throw new Error(text) })
        return resp.json();
      })
      .then(() => console.log('Register Success'))
      .catch((err) => console.error(err))
  };
}

export function userLoginAsync(payload) {
  return (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    };

    return fetch(URL_BASE + "login", requestOptions)
      .then((resp) => {
         return resp.json();
      })
      .then((data) => {
        dispatch(setUserLogin(true));
        dispatch(setUser(data.user))
        localStorage.setItem("access_token", data.access_token);
      })
      .catch((err) => console.error(err));
  };
}