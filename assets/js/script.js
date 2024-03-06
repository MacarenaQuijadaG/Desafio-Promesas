
//PUNTO 2 FUNICION ASINCRONICA
const fetchData = async () => {
    // URL DONDE SE EXTRAEN LOS DATOS
    const url = 'https://jsonplaceholder.typicode.com/photos';
  
    try {
      // PUNTO 3 FUNCION FETCH RECIBE EL VALOR DE LA PROMESA
      const response = await fetch(url);
      const data = await response.json();
  
      //PUNTO 4 METODO FOREACH QUE TRAE LOS 20 TITULOS
      data.slice(0, 20).forEach(album => {
        //MUESTRA EL ID
        console.log(album.id);
        //MUESTRA EL TITULO
        console.log(album.title);
      });
  
     //PUNTO 6  FUNCION ASINCRONICA QUE SE REUTILIZA FECHDATA PARA IMPRIMIR EL MENSAJE CON LA RESPUESTA
      await mensaje();
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };
  
 // PUNTO 5 CREACION DE PROMESA CON EL TIEMPO DE 3 SEGUNDOS
  const mensaje = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Información Enviada');
      }, 3000);
    });
  };
  
  // LLAMA A LA FUNCION PRINCIPAL ASINCRONICA
  fetchData();