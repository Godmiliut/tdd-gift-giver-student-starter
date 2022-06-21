const { BadRequestError } = require("../utils/errors");

class GiftExchange{
    static pairs(names){
        if(names.length%2 === 1){
            throw new BadRequestError("The names array's length must be even");
        }
        var paired=[];
        var alreadyAssigned=[];
        for(let i =0; i < names.length/2; i++){
            let pair=[];
            let random= Math.floor(Math.random() * names.length);
            while(alreadyAssigned.includes(names[random])){
                random= Math.floor(Math.random() * names.length);
            }
            pair.push(names[random]);
            let random2= Math.floor(Math.random() * names.length);
            while(random == random2 || alreadyAssigned.includes(names[random2])){
                random2= Math.floor(Math.random() * names.length);
            }
            pair.push(names[random2]);
            paired.push(pair);
            alreadyAssigned.push(names[random]);
            alreadyAssigned.push(names[random2]);
        }
        return paired;
    }

    static  traditional(names){
        if(names.length%2 != 0 ){
            throw new BadRequestError("The names array's length must be even");
        }
        var paired=[];
        var alreadyAssigned=[];
        let previous= Math.floor(Math.random() * names.length);
        for(let i=0; i < names.length-1; i++){
            let exchange="";
            let fName="";
            let lName="";
            fName=names[previous];
            let random= Math.floor(Math.random() * names.length);
            while(previous == random || alreadyAssigned.includes(names[random])){
                random= Math.floor(Math.random() * names.length);
            }
            lName=names[random];
            exchange= fName + " is giving a gift to " + lName;
            paired.push(exchange);
            alreadyAssigned.push(names[previous]);
            alreadyAssigned.push(names[random]);
            previous=random;
        }
        paired.push(alreadyAssigned[alreadyAssigned.length-1] + " is giving a gift to " + alreadyAssigned[0]);
        return paired;
    }
}
module.exports = GiftExchange