function Indicador(params) {
    this.codigo = params.codigo;
	this.nombre = params.nombre;
	this.unidad_medida = params.unidad_medida;
    this.serie = params.serie;

    this.datos = function() {
        return this.serie.map(({ fecha, valor }, i)=>{ return { numero: (i + 1), fecha: fecha, valor: valor }});
    }
    this.promedio = function() {
        return (this.serie.reduce((a, { valor })=> a + parseFloat(valor), 0)/this.serie.length).toFixed(2);
    }
    this.maximo = function() {
        return this.serie.reduce((a, { valor })=> a <  parseFloat(valor) ? parseFloat(valor) : a, 0);
    }
    this.minimo = function() {
        return this.serie.reduce((a, { valor })=> a <  parseFloat(valor) ? a : parseFloat(valor));
    }
}

module.exports = Indicador