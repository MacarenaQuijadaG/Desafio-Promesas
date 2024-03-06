
//PUNTO 2 FUNICION ASINCRONICA
const fetchData = async () => {
    // URL DONDE SE EXTRAEN LOS DATOS
    const url = 'https://jsonplaceholder.typicode.com/photos';
  
    try {
      // PUNTO 3 FUNCION FETCH RECIBE EL VALOR DE LA PROMESA
      const response = await fetch(url);
      const data = await response.json();

    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };
  

  // LLAMA A LA FUNCION PRINCIPAL ASINCRONICA
  fetchData();