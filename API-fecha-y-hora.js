//Uso de la API pública de World Time que permite obtener información de la fecha y hora en diferentes zonas horarias

const URL_API = "http://worldtimeapi.org/api/timezone/America/Montevideo";

//Función fech para obtener los datos de la API
      fetch(URL_API)
        .then(response => response.json())
        .then(data => {
          const date = new Date(data.datetime);
          //Modifica los datos obtenidos para cambiar la manera de mostrar la fecha
          const formattedDate = date.toLocaleString('es-UY', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
          //Modifica los datos obtenidos para cambiar la manera de mostrar la hora
          const formattedTime = date.toLocaleString('es-UY', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          });
          //Eventos para agregar la información obtenida del json de la API en los párrafos
          document.getElementById('date').textContent = formattedDate;
          document.getElementById('time').textContent = formattedTime;
        });