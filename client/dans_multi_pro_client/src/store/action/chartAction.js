const URL_BASE = "http://localhost:4000/"

export function setJob(payload) {
  return {
    type: "job/fetchSuccess",
    payload,
  };
}

export function fetchJobDetail(payload) {
  return (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "access_token": localStorage.access_token
      },
      body: JSON.stringify(payload),
    };

    return fetch(URL_BASE, requestOptions)
      .then((resp) => {
         return resp.json();
      })
      .then((data) => {
        console.log(data)
        dispatch(setJob(data))
      })
      .catch((err) => console.error(err));
  };
}