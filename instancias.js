async function main() {
    const axiosInstance = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
    });

    try {
      const res = await axiosInstance.get("/posts/1", {
        email: "peter@klaven",
      });
      console.log(res);
    } catch (error) {
      if (error.response.status === 404) {
        console.log("No se encontró peticion");
      }
      if (error.response.status === 400) {
        console.log("Datos erroneos");
        console.log(error.response.data.error);
      }
    }
  }
  
  main();
  