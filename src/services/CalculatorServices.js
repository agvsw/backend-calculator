const Calc = require('../models').Calculator;

module.exports = {
    arithmetic: function (body, response) {
        if (body.action === "tambah"){
            body.result = body.vara + body.varb;
        } else if (body.action === "kurang") {
            body.result = body.vara - body.varb;
        } else if (body.action === "kali") {
            body.result = body.vara * body.varb;
        }  else if (body.action === "bagi") {
            body.result = body.vara / body.varb;
        }
        Calc.create(body).then((res) => {
            response(null, res);
        }).catch((err) => {
            response(err, null);
        })
    }
};
