export const fetchUserName = async resource => {
  let response;
  try {
    response = await axios.get(API + resource).then(response => response.data);
    console.log("inside fetch method");
  } catch (exception) {
    console.log("inside fetch error: ", exception);
    response = new Error("Network error");
  }
  return response;
};
