class ServicesController {
    constructor() {}index(req, res) {
    res.status(200).json({ serverResponse: "hola mundo" });
    }
    test(req, res){
        req.body["msn"]="por el servidor";
        const data= req.body;
        res.status(200).json(data);
    }
    divisas(req, res){
        var params = req.body;
        if(params.moneda === null){
            res.status(300).json({msn : "Es necesario el valor de la moneda"});
            return;
        }
        if(params.cantidad === null){
            res.status(300).json({msn : "Es necesario la cantidad de la moneda"});
            return;
        }
         if(params.tipoMoneda === null){
            res.status(300).json({msn : "Especifique el pais del tipo de moneda"});
            return;
        }
         if(params.moneda == 6.96){
            const resul=parseFloat(params.cantidad)/6.96;
            res.status(200).json({msn:"La moneda "+params.tipoMoneda+ " tiene un valor total de "+''+resul+' '+ "Dolares Estadounidense"});
            return;
        }
       
        let valor= parseFloat(params.moneda) * parseFloat(params.cantidad);
        let resultado =parseFloat(valor)/6.96;
        res.status(200).json({msn:"La moneda "+params.tipoMoneda+ " tiene un valor total de "+''+resultado+' '+ "Dolares Estadounidense"});
        //res.status(200).json({msn:valor});

    }
    interes(req, res){
        var params = req.body;
        if(params.monto === null  && params.tipo===null && params.tiempo===null){
            res.status(300).json({msn : "Es necesario llenar todo los datos"});
            return;
        }
        var tipo=params.tipo;
        const porcentaje= parseFloat(params.tipo / 100);
       
        const aux=parseFloat(Math.pow((1+porcentaje),params.tiempo));
        
        let resultado=parseFloat(params.monto)* parseFloat(aux);
        res.status(200).json({msn:"El monto total a pagar es de un total de "+ resultado +" bs."});
    }

    }
    export default ServicesController;
