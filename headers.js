async function main() {
  /* const res = await axios.get('https://jsonplaceholder.typicode.com/users/1',{
        headers: {
            'lemito66': "Lemito66"
        }
    }
    ); */
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      name: "Lemito66",
    },
    {
      headers: {
        lemito66: "Lemito66",
      },
    }
  );

  console.log(res);
}

main();
