function createCar(manufacturer:string,model:string, ...options:{[key:string]:any}[]):{[ key: string ]: any }{

    let car :{[key:string]:any}={
    
        "manyfacturer":manufacturer,
        "model":model
    };
     
    for(let option of options){
    
        for(let key in option){
            car[key]=option[key];
        }
    }
    return car;
    }
    let carInfo=createCar('Toyota','Carmy',{"color":"blue"},{"year":2022});
    console.log(carInfo);