let info=[]
let get=function(){
    let userInfo=1
    while(userInfo!==0){
        userInfo=prompt('plz enter your information');
        if(userInfo===''||userInfo===null){
            return userInfo=0
        }
        userInfo=userInfo.split(',')
        let objctInfo={
           name:userInfo[0],
           age:Number(userInfo[1]),
           profilePic:(userInfo[2]==='yes') ? true : false,
           salary:userInfo[3]
        }
        info.push(objctInfo);
    }
}

get()
console.log(info)

// sasan,25,yes,1000
// arash,20,no,1500
// hadi,45,no,800
// hosein,35,yes,5000



// answer 2.1------------

// let infoAge=info
// infoAge.sort(function(a,b){
//     return b.age - a.age
// })
// console.log(infoAge)

let sortUser=function(arr){
    let sortObject=info.map((item)=>item).sort((a,b)=>b.age - a.age)
    console.log(sortObject);
}
sortUser(info)

// answer 2.2------------

// let maxSalary=info;
// maxSalary.sort(function(a,b){
//     return b.salary-a.salary
// })
// console.log(` ${maxSalary[0]['name']} has the highest income`);

let maxSalary=function(arr){
    let sortSalary=info.map((item)=>item).sort((a,b)=>b.salary - a.salary)
    console.log(` ${sortSalary[0]['name']} has the highest income`);
}
maxSalary(info)

// answer 2.3------------
let sumSalary=0
let avregeSalary;
info.forEach(function(info){
    sumSalary+=Number(info['salary']);
});
avregeSalary=sumSalary/info.length
console.log(`The average income is ${avregeSalary}`)


 
// answer 2.4------------
let isAllprofilePic=info.every( obj => obj.profilePic === true )
isAllprofilePic ? console.log('They all have profile pictures') : console.log('Some of them do not have a profile picture')