function setterGenerator(key){
    return (value)=>{
        this[key]=value
        return this
    }
}


const uesr = {} 
let nameSetter =setterGenerator.call(uesr,'name')

nameSetter('jack');
console.log(uesr);
