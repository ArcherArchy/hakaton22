import axios from "axios";

export default axios.create({
    // baseURL: ${prefix}api,
    headers: {
      'Access-Control-Allow-Origin': ['*', "https://dog.ceo"],
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });