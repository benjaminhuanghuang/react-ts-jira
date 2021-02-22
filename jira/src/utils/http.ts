import qs from "qs";
import * as auth from "../auth-provider";
import { useAuth } from "../context/auth-context";

const apiURL = process.env.REACT_APP_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config={}) => {
  const config = {
    method: "GET", // default method, will be overwrittin by customConfig
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiURL}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject({ message: "please login" });
    }
    const data  = await response.json();
    if(response.ok){
      return data;
    }
    else{
      return Promise.reject(data);
    }
  });
};


export const useHttp = ()=>{
  const {user} = useAuth()

  return (...[endpoint, config]:[string, Config])=>http(endpoint, {...config, token:user?.token})
}