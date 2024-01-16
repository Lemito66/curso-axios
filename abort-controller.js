async function main() {

    const controller = new AbortController();
    try {
        controller.abort();
      const res = await axios.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }, {
        signal: controller.signal,
      });
      console.log(res);
    } catch (error) {
      if (error.response?.status === 404) {
        console.log("No se encontró peticion");
      }
      if (error.response?.status === 400) {
        console.log("Datos erroneos");
        console.log(error.response.data.error);
      }
    }
  }
  
  main();
  