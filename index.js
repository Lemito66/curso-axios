console.log("Hello World");
// De una forma verbosa
function getUsers(limit) {
  axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    params: {
      _limit: limit,
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getUsersWithAxios(limit) {
  // Se puede usar .get, .post, .put, .delete
  axios
    .get("https://jsonplaceholder.typicode.com/users", {
      params: {
        _limit: limit,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
const data = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};

function createUser() {
  axios
    .post("https://reqres.in/api/register", {
      data,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function putUser() {
  // aqui se puede usar .put o .patch
  axios
    .put("https://jsonplaceholder.typicode.com/users/1", {
      name: "Lemito66",
      job: "Software Developer",
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteUser() {
  axios
    .delete("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function deleteUserWithAsyncAwait () {
  const response = await axios.delete("https://jsonplaceholder.typicode.com/users/1");
  console.log(response.data);
}

// getUsers(5);
// getUsersWithAxios(10);

//createUser();
//putUser();
//deleteUser();

deleteUserWithAsyncAwait()
