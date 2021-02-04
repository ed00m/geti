const { Router } = require('express');
const router = Router();

const Indicadores = require('../functions/indicadores.js');
const Calcular = require('../functions/calcular.js')
router.get('/', (req, res)=>res.json({ code: 200, message: "¡El servidor esta funcionando!", status: "ok", data: {} }));
router.get('/api', Indicadores.obtener, (req, res, next)=>res.json({ code: 200, message: "Proceso exitoso", status: "ok", data: req.data }));
router.get('/api/contar', Indicadores.obtener, Calcular.contador, (req, res)=>res.json({ code: 200, message: "Cantidad", status: "ok", data: req.datos }));
router.get('/api/promedio', Indicadores.obtener, Calcular.promedio, (req, res)=>res.json({ code: 200, message: "Promedio", status: "ok", data: req.datos }));
router.get('/api/minimo', Indicadores.obtener, Calcular.minimo, (req, res)=>res.json({ code: 200, message: "Mínimo", status: "ok", data: req.datos }));
router.get('/api/maximo', Indicadores.obtener, Calcular.maximo, (req, res)=>res.json({ code: 200, message: "Máximo", status: "ok", data: req.datos }));
router.get('/api/valores', Indicadores.obtener, Calcular.valores, (req, res)=>res.json({ code: 200, message: "Valores", status: "ok", data: req.datos }));

router.use((req, res)=>res.status(404).send({ code: 404, status: true, message: 'pagina_no_encontrada' }));
router.use((err, req, res)=>{ console.error(err.stack); res.status(500).send({ code: 500, error_type: 'error_interno', error_message: 'solicitud_denegada', data: {}, status: "failed" })});

module.exports = router;