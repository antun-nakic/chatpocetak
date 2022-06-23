const BACKEND_PATH = "http://localhost:5000/api";

export const loginCall = async (data) => {
  const response = await fetch(`${BACKEND_PATH}/auth/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return response;
};

export const registerCall = async (data) => {
  const response = await fetch(`${BACKEND_PATH}/auth/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return response;
};
