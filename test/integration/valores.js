const chai = require("chai");
const http = require("chai-http");
const tools = require('../tools.js');

chai.use(http);


describe("Solicitud de todos los posibles valores de la API", ()=> {
    it("debe aceptar un parametro de unidad de medida y una fecha", function (done) {
        chai
        .request(tools.service)
        .get("/api/valores?tipo_indicador=uf&fecha=2021")
        .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.status("ok");
            
            return done();
        })
    })
})