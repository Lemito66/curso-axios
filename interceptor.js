async function main () {
    axios.interceptors.request.use(function (config) {
        console.log(config);
        config.headers['Authorization'] = 'Bearer token';
        return config;
    });

    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log(res.data);
}

main();