test("user fetched correctly", () => {
  expect.assertions(1);
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(response =>
    response.json().then(data => expect(data.name).toBe("Leanne Graham"))
  );
});

test("user fetched correctly 2", async () => {
  expect.assertions(1);
  const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const data = await response.json();
  return expect(data.name).toBe("Ervin Howell");
});
