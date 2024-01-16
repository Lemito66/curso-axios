async function main() {
  const userURL = "https://jsonplaceholder.typicode.com/users";
  const postsURL = "https://jsonplaceholder.typicode.com/posts";

  const users = await axios.get(userURL); // Espera a que se resuelva la promesa
  const posts = await axios.get(postsURL); // Espera a que se resuelva la promesa

  const promises = await Promise.all([users, posts]); // Para que se ejecuten en paralelo y no en serie

  // console.log(users.data, posts.data);
  console.log(promises);
}

main();
