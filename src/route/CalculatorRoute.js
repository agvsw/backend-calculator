import express from 'express'
import service from '../services/CalculatorServices'
import CommonResponse from '../dtos/CommonResponse'

const calculatorRoute = express.Router();

calculatorRoute.post('/api/v1/arithmetic', (req, res, next) => {
    service.arithmetic(req.body, (err, result)=> {
        if (err){
            res.json(new CommonResponse(21, err, null))
        }else {
            res.json(new CommonResponse('','', result))
        }
    })
});

export default calculatorRoute;
