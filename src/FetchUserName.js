export const API = "https://jsonplaceholder.typicode.com";

export const fetchUserName = async resource => {
    let response;
    try {
      response = await axios.get(API + resource).then(response => response.data);
    } catch (exception) {
      response = new Error("Network error");
    }
    return response;
  };