const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/",(req,res)=>{
     res.send("hello world!");
});

app.post("/add",(req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(parseFloat(num1)>1000000||parseFloat(num2)>1000000){
        res.send({
            status:"error",
            message:"Overflow",
            sum:undefined
        });
        return;
    }
    
    if(parseFloat(num1)<-1000000||parseFloat(num2)<-1000000){
        res.send({
            status:"error",
            message:"Underflow",
            sum:undefined
        });
        return;
    }

    if(!isNaN(parseFloat(num1)&&!isNaN(parseFloat(num2)))){
        let sum=parseFloat(num1)+parseFloat(num2);
        if(sum<1000000){
            res.send({
                status:"success",
                message:"the sum of given two numbers",
                sum:sum
            })

            return;
        }else{
            res.send({
                status:"error",
                message:"Overflow",
                sum:undefined
            });
            return;
        }
    }else if(isNaN(parseFloat(num1)||isNaN(parseFloat(num2)))){
        res.send({
            status:"failure",
            message:"Invalid data types",
            sum:undefined
        });
        return;
    }
});


app.post("/sub",(req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(parseFloat(num1)>1000000||parseFloat(num2)>1000000){
        res.send({
            status:"error",
            message:"Overflow",
            difference:undefined
        });
        return;
    }
    
    if(parseFloat(num1)<-1000000||parseFloat(num2)<-1000000){
        res.send({
            status:"error",
            message:"Underflow",
            difference:undefined
        });
        return;
    }

    if(!isNaN(parseFloat(num1)&&!isNaN(parseFloat(num2)))){
        let difference=parseFloat(num1)-parseFloat(num2);
        
            res.send({
                status:"success",
                message:"the difference of given two numbers",
                difference:difference                
            });
            return;
         
    }else if(isNaN(parseFloat(num1)||isNaN(parseFloat(num2)))){
        res.send({
            status:"failure",
            message:"Invalid data types",
            difference:undefined
        });
        return;
    }
});


app.post("/multiply",(req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(parseFloat(num1)>1000000||parseFloat(num2)>1000000){
        res.send({
            status:"error",
            message:"Overflow",
            result:undefined
        });
        return;
    }
    
    if(parseFloat(num1)<-1000000||parseFloat(num2)<-1000000){
        res.send({
            status:"error",
            message:"Underflow",
            result:undefined
        });
        return;
    }

    if(!isNaN(parseFloat(num1)&&!isNaN(parseFloat(num2)))){
        let result=parseFloat(num1)*parseFloat(num2);
        if(result<1000000){
            res.send({
                status:"success",
                message:"the product of given two numbers",
                result:result
            })

            return;
        }else{
            res.send({
                status:"error",
                message:"Overflow",
                result:undefined
            });
            return;
        }
    }else if(isNaN(parseFloat(num1)||isNaN(parseFloat(num2)))){
        res.send({
            status:"failure",
            message:"Invalid data type",
            result:undefined
        });
        return;
    }
});


app.post("/divide",(req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(parseFloat(num1)>1000000||parseFloat(num2)>1000000){
        res.send({
            status:"error",
            message:"Overflow",
            result:undefined
        });
        return;
    }
    
    if(parseFloat(num1)<-1000000||parseFloat(num2)<-1000000){
        res.send({
            status:"error",
            message:"Underflow",
            result:undefined
        });
        return;
    }

    if(!isNaN(parseFloat(num1)&&!isNaN(parseFloat(num2)))){
        if(num2===0){
            res.send({
                status:"error",
                message:"cannot divide by zero",
                result:undefined
            })

            return;
        }
        let result=parseFloat(num1)/parseFloat(num2);
            res.send({
                status:"success",
                message:"the division of given two numbers",
                result:result
            })

            return;
    }else if(isNaN(parseFloat(num1)||isNaN(parseFloat(num2)))){
        res.send({
            status:"failure",
            message:"Invalid data types",
            result:undefined
        });
        return;
    }
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;