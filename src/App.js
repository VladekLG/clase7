import './App.css';
import React, {useEffect,useState} from 'react'

function App() {

/*useState */
  const [games,setGames] = useState([])

// Preparacion del UseEffect

  useEffect(() => {
  
    const getData = async () => {
      // FETCH recibe dos parametros, el primer es la url, la segunda son objetos metodos,headers,bodys etc..
      const peticion = await fetch(
        "https://mmo-games.p.rapidapi.com/games?platform=browser",
        {
          method: "GET",
          headers: {
            platform: "browser",
            "X-RapidAPI-Key":
              "c0d57ca6a7msh28e6583fb9d629ap1b06a0jsnf8963e89f028",
            "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
          },
        }
      );
      // Despues del cierre parentesis de fetch miro por consola mi peticion
      // console.log("peticion:", peticion);
      // Para obtener los datos del body debemos parsear la peticion con el metodo json()
      const response = await peticion.json() /*Esto me permite obtener el resultado que me envia el servidor en formato json */
      // console.log('response',response)/*--> RESPONSE ya tiene los datos en formato JSON, asi que ahora puedo manipularlo con useState */
      setGames(response)/*--> La respuesta de la peticion la guardamos en la variable de 'games' */
    };


    
    const promesa = ()=>{
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(getData())
        }, 2000);
      })
    }

      promesa()
    
     /*--> Invoco los datos */
  }, []);

  


   /*--> Verifico que la variable 'response' se este guardando en 'games' */
  return (
    <div className="App">
     <h1>Hola mundo</h1>
      
    <h2>Datos: {games[0].title}</h2>     

      {
      games.map((game)=>{
        return(<h1>{game.title}</h1>
        )
      })
     } 

    </div>
  );
}

export default App;
