const request = require('request');

module.exports = {
    obtener: (req, res, next) =>{
        if (req.query.tipo_indicador && req.query.fecha) {
            let tipo_indicador = req.query.tipo_indicador, fecha = req.query.fecha
            request.get({ url: `https://mindicador.cl/api/${tipo_indicador}/${fecha}` }, function(err, httpResponse, body){ 
                if(err){
                    res.status(500).send({ code: 500, error_type: 'Mindicador_error', error_message: 'solicitud_denegada', error_content: JSON.parse(body), status: "failed" })
                } else {
                    if(httpResponse.statusCode == 200){
                        if (JSON.parse(body).serie.length > 0) {
                            req.data = JSON.parse(body);
                            next();
                        } else {
                            res.send({ code: 200, message: "No se encontraros valores para el tipo de indicador en la fecha indicada", status: "ok", data: {} })
                        }
                    } else {
                        res.status(httpResponse.statusCode).send({ code: httpResponse.statusCode, message: 'Ups!', data: JSON.parse(body), status: "failed" })
                    }
                }
            })
        } else {
            res.status(400).send({ code: 400, message: 'solicitud_invalida', data: {}, status: "failed" })
        }
    }
}