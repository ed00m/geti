# Aplicativo Geti Challenge
- Para instalarlo:
    Descargue-Descomprima o clone este proyecto en el directorio principal  (Ej: C:\).
    Abra su terminal principal En el directorio del proyecto (Ej: C:\geti) y ejecute el comando:
        
        npm install

- Para iniciar el test unitario
    En el directorio del proyecto (Ej: C:\geti) y ejecute el comando:
        
        npm test
        
    Si desea ver un reporte en su explorador ejecute los siguientes comandos:
        
        npm install -g nyc
        nyc npm test
        nyc report --reporter=html
    
    Y se creará un directorio de nombre 'coverage' dentro del directorio del proyecto dentro del cual se encuentra un index.html que podrá abrir con su explorador principal para su revisión.

- Para Iniciar los servicios:
    En el directorio del proyecto (Ej: C:\geti) y ejecute el comando:
        
        npm start

    Para comprobar que el servicio esta funcionando solo vaya a su explorador y vaya a la URL http://localhost:3000 donde obtendrá el mensaje:
        
        "{"code":200,"message":"¡El servidor esta funcionando!","status":"ok","data":{}}"

    # ¡La aplicación se utiliza con el formato get con las variables 'tipo_indicador' y 'fecha'!
    !El valor del 'tipo_indicador' pueden ser: uf, ivp, dolar, dolar_intercambio, euro, ipc, utm, imacec, tpm, libra_cobre, tasa_desempleo, bitcoin.
    !El valor de 'fecha' es una fecha valida ya sea en formato 'YYYY', como por ejemplo '2020' o en 'dd-mm-yyyy', como por ejemplo '09-02-2021'.
    !El sistema cuenta con 5 funciones las cuales son:
     *Contar: la cual ordena y muestra la cantidad de parametros serializados por la API en torno a un indicador y sus valores
     + Se consulta con la URL: 
     
            http://localhost:3000/api/contar?tipo_indicador={tipo_indicado}&fecha={fecha}
        
        > Ejemplo: http://localhost:3000/api/contar?tipo_indicador=uf&fecha=2021
        
     *Promedio: El cual calcula el promedio del valor del indicador según la fecha estipulada
     + Se consulta con la URL: 
        
            http://localhost:3000/api/promedio?tipo_indicador={tipo_indicado}&fecha={fecha}
        
        > Ejemplo: http://localhost:3000/api/promedio?tipo_indicador=uf&fecha=2021

     *Máximo: Muestra el valor máximo alcanzado por el indicador en la fecha estipulada.
     + Se consulta con la URL: 
     
            http://localhost:3000/api/maximo?tipo_indicador={tipo_indicado}&fecha={fecha}
        
        > Ejemplo: http://localhost:3000/api/maximo?tipo_indicador=uf&fecha=2021

     *Mínimo: Muestra el valor mínimo alcanzado por el indicador en la fecha estipulada.
     + Se consulta con la URL: 
                   
            http://localhost:3000/api/minimo?tipo_indicador={tipo_indicado}&fecha={fecha}
        
        > Ejemplo: http://localhost:3000/api/minimo?tipo_indicador=uf&fecha=2021

     *Valores: Calcula y ordena todas las operaciones realizadas hasta ahora, tales como promedio, máximo y mínimo, como tambien los datos ordenados e indexados de los valores y fechas del indicador consultado.
     + Se consulta con la URL: 
     
            http://localhost:3000/api/valores?tipo_indicador={tipo_indicado}&fecha={fecha}
        
        > Ejemplo: http://localhost:3000/api/valores?tipo_indicador=uf&fecha=2021
