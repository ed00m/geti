let Indicador = require('../objects/indicador.js')
module.exports = {
    contador: (req, res, next) => {
        let indicador = new Indicador(req.data)
        req.datos = { 
           "nombre": indicador.nombre, 
           "unidad_medida": indicador.unidad_medida, 
           "cantidad_resultados_obtenidos": indicador.serie.length, 
           "datos_en_serie": indicador.datos()
        }
       next()
    },
    promedio: (req, res, next) => {
        let indicador = new Indicador(req.data)
        req.datos = { 
            "nombre": indicador.nombre,
            "unidad_medida": indicador.unidad_medida, 
            "cantidad_resultados_obtenidos": indicador.serie.length, 
            "valor_promedio": indicador.promedio()
        }
        next()
    },
    maximo: (req, res, next) => {
        let indicador = new Indicador(req.data)
        req.datos = { 
            "nombre": indicador.nombre, 
            "unidad_medida": indicador.unidad_medida, 
            "cantidad_resultados_obtenidos": indicador.serie.length, 
            "valor_máximo": indicador.maximo()
        }
        next()
    },
    minimo: (req, res, next) => {
        let indicador = new Indicador(req.data)
        req.datos = { 
            "nombre": indicador.nombre, 
            "unidad_medida": indicador.unidad_medida, 
            "cantidad_resultados_obtenidos": indicador.serie.length, 
            "valor_mínimo": indicador.minimo()
        }
        next()
    },
    valores: (req, res, next) => {
        let indicador = new Indicador(req.data)
        req.datos = { 
            "nombre": indicador.nombre, 
            "unidad_medida": indicador.unidad_medida, 
            "cantidad_resultados_obtenidos": indicador.serie.length, 
            "valor_máximo": indicador.maximo(), "valor_mínimo": indicador.minimo(), 
            "valor_promedio": indicador.promedio(), 
            "datos": indicador.datos()
        }
        next()
    },
}