import axios from "axios";

export const API = "https://jsonplaceholder.typicode.com";

export const fetchData = async query => await axios.get(API + query);
