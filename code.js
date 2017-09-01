var imagenes=new Array(
        'nala.jpeg',
        'eagle.jpeg',
        'giff.gif',
        'city.jpg',
        'binary.jpg'
    );

function fondoRandom()
    {
        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
        var index=Math.floor((Math.random()*imagenes.length));
 
        // cambiamos la imagen
       // document.getElementById("imagen").src=imagenes[index];
        document.getElementById("imagen").background=imagenes[index];
    }

